LewkPrototype

About

This project is an AI based fashion stylist that recommends items from catalogue.

Endpoints

1 - Create Fashion Catalogue using the product API.

Request URL : 

http://localhost:8000/api/createinput


2 - Create Fashion Assistant and returns the assistant ID.

Request URL : 

http://localhost:8000/api/createassistant

Response:

{
{
    "assistant": {
        "id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
        "object": "assistant",
        "created_at": 1710942347,
        "name": "Fashion Stylist",
        "description": null,
        "model": "gpt-4-1106-preview",
        "instructions": "You are an AI fashion stylist system, serving as your personal fashion advisor. Interact with me, your AI stylist, as I guide you through the intricacies of fashion and help you curate the perfect outfits for any occasion. Describe how I understand your unique preferences, body type, and the events you're dressing for. Detail the dialogue between us, whether it's through a chat interface or a mobile app, as I provide tailored recommendations from my vast database of clothing items and style trends. Show how I adapt to your individual tastes, offer styling tips, and elevate your shopping experience to a whole new level.\n            ",
        "tools": [
            {
                "type": "retrieval"
            }
        ],
        "file_ids": [],
        "metadata": {}
    }
}
}


3 - Upload the generated catalogue to the AI assitant

Request URL : 

http://localhost:8000/api/uploadfile

Response:

{
    "file": {
        "object": "file",
        "id": "file-jvufFC6c7KlC7dHLRgL7cxhO",
        "purpose": "assistants",
        "filename": "clothes.txt",
        "bytes": 157754,
        "created_at": 1710942350,
        "status": "processed",
        "status_details": null
    }
}

4 - Create a thread to chat with the assistant

Request URL (type:GET) : 

http://localhost:8000/api/createthread

Response:

{
    "thread": {
        "id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
        "object": "thread",
        "created_at": 1710942354,
        "metadata": {}
    }
}


5 - Attach the message to the thread

Request URL (type:POST) : 

http://localhost:8000/api/sendmessage

Response:

{
    "message": {
        "id": "msg_hh4uSusbsKZefpljVtU8f0wq",
        "object": "thread.message",
        "created_at": 1710942356,
        "assistant_id": null,
        "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
        "run_id": null,
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": {
                    "value": "Get the product title, id and image source of all the products from database on the basis of this prompt :Mix and match an outfit for me ?. Do not stop until you look into the entire database. Send the response in the following format : \n            Product Title :\n            Product ID :\n            Product Image :\n            Product Description : \n            ",
                    "annotations": []
                }
            }
        ],
        "file_ids": [],
        "metadata": {}
    }
}

6 - Run the thread/ Send message

Request URL (type:GET) : 

http://localhost:8000/api/createRun

Response:

{
    "options": {
        "method": "get",
        "path": "/threads/thread_yrppwZnmc6wTz0VdarfsVGxp/messages",
        "query": {},
        "headers": {
            "OpenAI-Beta": "assistants=v1"
        }
    },
    "response": {
        "size": 0,
        "timeout": 0
    },
    "body": {
        "object": "list",
        "data": [
            {
                "id": "msg_hh4uSusbsKZefpljVtU8f0wq",
                "object": "thread.message",
                "created_at": 1710942356,
                "assistant_id": null,
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": null,
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Get the product title, id and image source of all the products from database on the basis of this prompt :Mix and match an outfit for me ?. Do not stop until you look into the entire database. Send the response in the following format : \n            Product Title :\n            Product ID :\n            Product Image :\n            Product Description : \n            ",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            },
            {
                "id": "msg_8LMcM7ShkaOW1lVvsZ6Mjbvp",
                "object": "thread.message",
                "created_at": 1710942373,
                "assistant_id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": "run_e8Qcdu420oUNrwAKT6GA1Kit",
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Product Title: Ace of Something Cyra Hat\nProduct ID: Not provided in the extracted quote\nProduct Image: Not provided in the extracted quote\nProduct Description: The Ace Of Something Cyra Droop Hat in Natural is a chic style, featuring an elegant droop-style brim. Crafted with 100% wheat straw, and inspired by warm summer days, this style is perfect for adding a touch of leisurely luxe to any look. Includes an adjustable inner band to ensure a comfortable fit.\n\nTo obtain the Product ID and Product Image, I should continue looking into the database. Let's continue to scroll further through the file to find more products.",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            },
            {
                "id": "msg_uJbjwqhTXQXhVdkipynp1qjb",
                "object": "thread.message",
                "created_at": 1710942388,
                "assistant_id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": "run_e8Qcdu420oUNrwAKT6GA1Kit",
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Product Title: Grace and Mila Marilou Dress\nProduct ID: 45470719148265\nProduct Image: ![Grace and Mila Marilou Dress](https://cdn.shopify.com/s/files/1/0646/9337/1113/files/MARILOU_12388_-NOIR.jpg?v=1710539674)\nProduct Description: A timeless and elegant little black dress with a drop shoulder and relaxed fit. Dress comes with a wrap-around belt. Available in black. Model is wearing size small. Belt featured in images not included.\n  \nI'll continue to scroll through the file to find more products.",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            },
            {
                "id": "msg_ZV7OpOTAVSDauPDhHK5aUQ6p",
                "object": "thread.message",
                "created_at": 1710942402,
                "assistant_id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": "run_e8Qcdu420oUNrwAKT6GA1Kit",
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Product Title: Grace and Mila Mathilde Pant\nProduct ID: 45470730060009\nProduct Image: ![Grace and Mila Mathilde Pant](https://cdn.shopify.com/s/files/1/0646/9337/1113/files/MATHILDE_12309_-KAKI.jpg?v=1710188274)\nProduct Description: The perfect matching set. These loose-fitting pull-on pants pairs well with the Mandy top for an easy and effortless look. Available in Olive. Model is wearing size small.\n\nI will continue to scroll through the file to find more products.",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            },
            {
                "id": "msg_t4Gs1vpl1yGRYrNIAEbdwysJ",
                "object": "thread.message",
                "created_at": 1710942418,
                "assistant_id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": "run_e8Qcdu420oUNrwAKT6GA1Kit",
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Product Title: Grace and Mila Manolo Dress\nProduct ID: 45470712234217\nProduct Image: ![Grace and Mila Manolo Dress](https://cdn.shopify.com/s/files/1/0646/9337/1113/files/MANOLO_22293_-KAKI___P6.jpg?v=1710188713)\nProduct Description: The perfect vacation dress. Casual and comfortable but elevated with gold button details and tie waist. Available in Dark Olive. Model is wearing size small.\n\nLet's keep looking for more products in the file.",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            },
            {
                "id": "msg_vWqnR52rKsJE70ZWOpAfYTzg",
                "object": "thread.message",
                "created_at": 1710942430,
                "assistant_id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": "run_e8Qcdu420oUNrwAKT6GA1Kit",
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Product Title: Grace and Mila Mandy Top\nProduct ID: 45470708695273\nProduct Image: ![Grace and Mila Mandy Top](https://cdn.shopify.com/s/files/1/0646/9337/1113/files/MANDY_12415_-KAKI.jpg?v=1710186891)\nProduct Description: The perfect matching set. This loose-fitting lightweight top pairs well with the Mathilde pant for an easy and effortless look. Available in Olive. Model is wearing size small.\n\nI will continue to scroll through the file to find more products.",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            },
            {
                "id": "msg_yQ1spzrNabxoswxxBwcBQCFj",
                "object": "thread.message",
                "created_at": 1710942443,
                "assistant_id": "asst_dl7fRsCp3Wxwn0Exb1s6W6TG",
                "thread_id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
                "run_id": "run_e8Qcdu420oUNrwAKT6GA1Kit",
                "role": "assistant",
                "content": [
                    {
                        "type": "text",
                        "text": {
                            "value": "Product Title: The Korner Beige Pants\nProduct ID: 45470920212713\nProduct Image: ![The Korner Beige Pants](https://cdn.shopify.com/s/files/1/0646/9337/1113/files/326.jpg?v=1710289687)\nProduct Description: Easy lightweight pull-on linen pants with side pocket detail. Pairs well with The Korner Linen Jacket. Model is wearing size 4. Available in Beige.\n\nI will continue to scroll through the file to find more products.",
                            "annotations": []
                        }
                    }
                ],
                "file_ids": [],
                "metadata": {}
            }
        ],
        "first_id": "msg_yQ1spzrNabxoswxxBwcBQCFj",
        "last_id": "msg_hh4uSusbsKZefpljVtU8f0wq",
        "has_more": false
    }
}


Using

To set up your own :

npm install
npm start
# Started on port 8000
