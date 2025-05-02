## Introduction

This is an AI image search project. Goal is to search for products by an image and display the list of products. This project will not use the typical item image vector match but rather, it will use AI models (google gemini in this case) to generate a search query based on the image provided. This generated search query will be used to call the serpAPI to get products.

This will not be as accurate as the vector match method. This is for experimenting with the capabilities of AI models to describe images and see how they perform in edge case sceenarios. Also for testing out the system prompt that works best and testing out the response schema for the models.

### Current UI - (WIP)
DWeb View

<img width="1437" alt="Screenshot 2025-05-01 at 10 17 27 PM" src="https://github.com/user-attachments/assets/7a761d96-a2bb-4247-b2f0-c69d6be4a209" />

MWeb View

<img width="424" alt="Screenshot 2025-05-01 at 10 18 32 PM" src="https://github.com/user-attachments/assets/33e33f2d-0f0b-4768-9475-16af9dd8e8c3" />


## Getting Started

First, install the dependencies:

```bash
npm run i
```
Then, run the development server:
```bash
npm run dev
```

This needs an API key for serpAPI which can be created by creating an account. The free tier gives access to 100 calls/month
https://serpapi.com/dashboard


