# LewkPrototype

## Introduction
Lewk is a artificialt intelligence based fashion stylist that helps people decide what to wear.
It also gives recommendations on the basis of existing product catalogue.

## Setup

### Prerequisites

- Node.js
- OpenAI API account

### Environment Configuration
Create a `.env` file in the root directory with the following content:

```shell
PORT=8000
OPENAI_API_KEY=<YOUR_API_KEY>
```

### Installing Dependencies

Install dependencies needed for the project such as express and nodemon using :

```shell
npm install
```

## Running the Application

### Start the API Server

```shell
npm start
```

## API endpoints and functionality :

#### Assuming server is running at Port 8000

### 1. Create an input file using the product API (GET)

#### Request :

```shell
http://localhost:8000/api/createinput
```
#### Example Response :

```shell
{
    "products": [
        {
            "id": 8339405078761,
            "title": "Astrid Wander Puff Sleeve Dress",
            "handle": "astrid-wander-puff-sleeve-dress",
            "body_html": "<p>A classic and timeless dress you will have on repeat this spring/summer.  This maxi length dress has full button closure and a puff sleeve detail.  An easy yet stylish dress to add to your wardrobe.</p>\n<p>Available in Black</p>\n<p> </p>",
            "published_at": "2024-03-20T17:19:21-04:00",
            "created_at": "2024-01-31T18:44:25-05:00",
            "updated_at": "2024-03-20T18:39:23-04:00",
            "vendor": "Astrid",
            "product_type": "Dress",
            "tags": [
                "clothing",
                "nosale"
            ],
            "variants": [
                {
                    "id": 46588431925481,
                    "title": "Black / Small",
                    "option1": "Black",
                    "option2": "Small",
                    "option3": null,
                    "sku": "",
                    "requires_shipping": true,
                    "taxable": true,
                    "featured_image": null,
                    "available": true,
                    "price": "140.00",
                    "grams": 0,
                    "compare_at_price": null,
                    "position": 1,
                    "product_id": 8339405078761,
                    "created_at": "2024-01-31T18:44:26-05:00",
                    "updated_at": "2024-03-20T18:39:23-04:00"
                },
                {
                    "id": 46588431958249,
                    "title": "Black / Medium",
                    "option1": "Black",
                    "option2": "Medium",
                    "option3": null,
                    "sku": "",
                    "requires_shipping": true,
                    "taxable": true,
                    "featured_image": null,
                    "available": true,
                    "price": "140.00",
                    "grams": 0,
                    "compare_at_price": null,
                    "position": 2,
                    "product_id": 8339405078761,
                    "created_at": "2024-01-31T18:44:26-05:00",
                    "updated_at": "2024-03-20T18:39:23-04:00"
                }
            ],
            "images": [
                {
                    "id": 42085354537193,
                    "created_at": "2024-02-26T20:15:15-05:00",
                    "position": 1,
                    "updated_at": "2024-02-26T20:15:50-05:00",
                    "product_id": 8339405078761,
                    "variant_ids": [],
                    "src": "https://cdn.shopify.com/s/files/1/0646/9337/1113/files/19-32009E-POWDER.jpg?v=1708996550",
                    "width": 891,
                    "height": 1122
                }
            ],
            "options": [
                {
                    "name": "Color",
                    "position": 1,
                    "values": [
                        "Black"
                    ]
                },
                {
                    "name": "Size",
                    "position": 2,
                    "values": [
                        "Small",
                        "Medium"
                    ]
                }
            ]
        }]
} and more items
```

### 2. Create an AI assistant using OpenAI assistant API (GET)

#### Request :

```shell
http://localhost:8000/api/createassistant
```

#### Example Response 

```shell
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
```

### 3. Upload and attach the generated file to the AI assitant created (GET)

#### Request :

```shell
http://localhost:8000/api/uploadfile
```

#### Response :

```shell
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
```

### 4. Create a thread to start a conversation with the assistant (GET)

#### Request :

```shell
http://localhost:8000/api/createthread
```
#### Response :

```shell
{
    "thread": {
        "id": "thread_yrppwZnmc6wTz0VdarfsVGxp",
        "object": "thread",
        "created_at": 1710942354,
        "metadata": {}
    }
}
```

### 5. Create a message to send to the assistant (POST)

#### Request :

```shell
http://localhost:8000/api/sendmessage
```

#### Request body :

```shell
{
    "message": "Mix and match an outfit for me ?"
}
```

#### Response :

```shell
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
```

### 6. Finally send the message to the assistant and watch for the response (GET)

#### Request :

```shell
http://localhost:8000/api/createRun
```

#### Response :

```shell
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
    ]
}
```
