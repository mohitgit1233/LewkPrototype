// import OpenAI from "openai";
const OpenAI = require('openai')
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const fs = require('fs');

let assistantId = '';
let fileId = ''
let threadId = ''


//use this to create assistant
async function createAssistant(req, res) {

  try {
    const assistant = await openai.beta.assistants.create({
      instructions: `You are an AI fashion stylist system, serving as your personal fashion advisor. Interact with me, your AI stylist, as I guide you through the intricacies of fashion and help you curate the perfect outfits for any occasion. Describe how I understand your unique preferences, body type, and the events you're dressing for. Detail the dialogue between us, whether it's through a chat interface or a mobile app, as I provide tailored recommendations from my vast database of clothing items and style trends. Show how I adapt to your individual tastes, offer styling tips, and elevate your shopping experience to a whole new level.
            `,
      name: "Fashion Stylist",
      tools: [{ type: "retrieval" }],
      // model: "gpt-4-1106-preview",
      model:"gpt-3.5-turbo-0125" 
    }); //select the gpt model as per your OPENAI account

    assistantId = assistant.id
    return res.json({ assistant: assistant });
  } catch (e) {

    console.log(e);
    return res.json({ error: e });
  }
}

//use this to upload file to assistant
async function uploadFileToAssistant(req, res) {
  try {
    // Upload a file with an "assistants" purpose
    const file = await openai.files.create({
      file: fs.createReadStream("clothes.txt"),
      purpose: "assistants",
    });

    fileId = file.id
    attachFileToAssistant()
    return res.json({ file: file });
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }
}

//use this to attach file to assistant
async function attachFileToAssistant() {
  try {
    const assistantFile = await openai.beta.assistants.files.create(
      assistantId,
      {
        file_id: fileId,
      }
    );

    console.log(assistantFile);

    return Response.json({ assistantFile: assistantFile });
  } catch (e) {
    console.log(e);
    return Response.json({ error: e });
  }
}

//use this to start conversation thread
async function createThread(req, res) {
  try {
    const thread = await openai.beta.threads.create();

    console.log(thread);
    threadId = thread.id
    return res.json({ thread: thread });
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }
}

//use this to create a message 
async function createMessage(req, res) {

  const message = await req.body.message

  if (!threadId || !message)
    return res.json({ error: "Invalid message" }, { status: 400 });
  console.log(message)
  try {

    console.log("seee", threadId)
    const threadMessages = await openai.beta.threads.messages.create(
      threadId,
      {
        role: "user", content: `Get the product title, id and image source of all the products from database on the basis of this prompt :${message}. Do not stop until you look into the entire database. Send the response in the following format : 
            Product Title :
            Product ID :
            Product Image :
            Product Description : 
            ` }
    );

    console.log(threadMessages);

    return res.json({ message: threadMessages });
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }
}


//use this to send message to assistant and get response
async function createRun(req, res) {
  if (!threadId)
    return res.json({ error: "No thread id provided" }, { status: 400 });
  if (!assistantId)
    return res.json(
      { error: "No  assistant id provided" },
      { status: 400 }
    );

  try {
    let run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    console.log({ run: run });

    while (['queued', 'in_progress', 'cancelling'].includes(run.status)) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      run = await openai.beta.threads.runs.retrieve(
        run.thread_id,
        run.id
      );
    }

    if (run.status === 'completed') {
      const messages = await openai.beta.threads.messages.list(
        run.thread_id
      );
      console.log(messages)
      for (const message of messages.data.reverse()) {
        console.log(`${message.role} > ${message.content[0].text.value}`);
      }
      return res.json(messages)
    } else {
      console.log(run.status);
    }
    return res.json({ run: run });
  } catch (e) {
    console.log(e);
    return res.json({ error: e });
  }

}



module.exports =
{
  createAssistant,
  uploadFileToAssistant,
  attachFileToAssistant,
  createThread,
  createMessage,
  createRun
}