# 📄 Retrieval-Augmented Generation (RAG) with Web Scraping and Gemini

## 📘 Project Overview
This project demonstrates a full **Retrieval-Augmented Generation (RAG)** pipeline built using **LangChain**, **Google's Gemini 1.5 Pro model**, and **web scraping with BeautifulSoup**. The system dynamically fetches web content, embeds it using Google's `embedding-001` model, stores the vectors in a Chroma vector store, and uses semantic search to feed relevant data to Gemini for generating accurate, context-aware answers.

## 🎯 Objective
To enable real-time question answering over a live blog or article by:
- Extracting web content dynamically,
- Storing it in an embedding-based vector database,
- Using LangChain's retrieval chain to fetch relevant context,
- And generating intelligent responses with Google's Gemini model.

## 🔍 What is RAG?
**Retrieval-Augmented Generation (RAG)** enhances language models by combining:
- **Retrieval**: Bring in up-to-date external knowledge.
- **Generation**: Use LLMs like Gemini to produce well-informed outputs.

Instead of relying solely on the LLM’s internal memory, RAG fetches information from vector stores (based on real content like websites), significantly improving accuracy and recency.

---

## 🧠 Technologies Used
- **LangChain** (chains, loaders, memory, prompt templates)
- **LangChain Community + Hub**
- **Chroma Vector Store** – semantic document storage and retrieval
- **Google Generative AI**:
  - Gemini-1.5-Pro (Text Generation)
  - Embedding-001 (Text Embedding)
- **BeautifulSoup4** – for parsing and extracting clean HTML content
- **WebBaseLoader** – from LangChain, using `bs4` internally
- **Python** – requests, os, and utility libraries

---

## 🔧 How the Pipeline Works

### 1. 🧹 Web Scraping
- Uses `WebBaseLoader` to scrape content from:
  - https://lilianweng.github.io/posts/2023-06-23-agent/
- Filters and extracts meaningful sections like title and blog content using BeautifulSoup.

### 2. 📚 Text Chunking & Embedding
- Splits raw content into chunks using `RecursiveCharacterTextSplitter`.
- Embeds each chunk using `GoogleGenerativeAIEmbeddings`.

### 3. 🧠 Semantic Storage & Retrieval
- Stores embeddings in **Chroma**.
- At query time, retrieves relevant chunks based on user input.

### 4. 🤖 Response Generation
- Uses Gemini-1.5-Pro to generate intelligent responses using retrieved chunks as context.
- Fully powered by **LangChain retrieval chains** and **prompt templates**.

---

## 🧪 Example: How It Works

```python
from langchain_google_genai import ChatGoogleGenerativeAI
model = ChatGoogleGenerativeAI(model="gemini-1.5-pro")
response = model.invoke("What is this article about?")
print(response.content)
```

- **User Query**: "What are autonomous agents?"
- **System Action**:
  - Scrapes article
  - Finds relevant sections
  - Uses Gemini to answer with grounded context

---

## ⚙️ Installation
```bash
pip install --upgrade langchain langchain-community langchainhub langchain-chroma beautifulsoup4
pip install -q langchain_google_genai
```

---

## 🛠️ Environment Setup
```python
import os
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_ENDPOINT"] = "https://api.smith.langchain.com"
os.environ["LANGCHAIN_API_KEY"] = "your_langchain_api_key"
os.environ["GOOGLE_API_KEY"] = "your_google_api_key"
os.environ["LANGCHAIN_PROJECT"] = "RAG"
```

---

## 📌 Reference Source
This RAG pipeline uses the following article as its dynamic knowledge source:

🔗 [Lil’Log – “LLMs as Agents” by Lilian Weng](https://lilianweng.github.io/posts/2023-06-23-agent/)

This blog post provides deep insights into autonomous agents, planning strategies, memory modules, and more. The system scrapes and indexes this content so users can query:
- “What is the role of a memory module in an agent?”
- “How does the agent loop work?”
- “Summarize the different types of planning agents discussed.”

---

## 🚀 Outcome
This project allows users to:
- Scrape live articles
- Ask questions based on that content
- Get detailed and accurate answers
- All powered by retrieval + generation using Gemini

It can be extended to support multiple sites, PDFs, user uploads, or real-time knowledge base creation.

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo, make changes, and submit a pull request.

## 📄 License
This project is licensed under the **MIT License**.


