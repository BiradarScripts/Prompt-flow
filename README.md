# Prompt Flow
## Overview
![image](https://github.com/user-attachments/assets/f4e48cde-9781-4686-a484-f5902ded0c30)

**Prompt Flow** is an AI-orchestrated code generation and autonomous deployment pipeline that utilizes LangChain and large language models (LLMs) to empower users in developing entire projects through natural language prompts. It automatically generates a complete folder structure, writes code, and configures all necessary files for specified frameworks or languages.


## Features

![image](https://github.com/user-attachments/assets/111594d9-c984-4b6e-98d1-db130fc7b6bd)


![image](https://github.com/user-attachments/assets/c172a6a1-4f16-4ff8-8200-03ed821bf10b)

![image](https://github.com/user-attachments/assets/cd39df3c-b249-423d-a037-455020abc5e3)

![image](https://github.com/user-attachments/assets/1d6a2237-f386-488a-b870-53c9da2320a3)

![image](https://github.com/user-attachments/assets/191408d6-7d9f-43c5-97f5-7d25141c73b2)


## Technologies Used
- LangChain
- Docker
- AWS
- GCP

### Frontend Technologies
- React
- Vue.js
- Next.js
- GraphQL

### Backend Technologies
- Node.js
- Express.js
- Django
- Flask

### Databases
- MongoDB
- PostgreSQL
- Redis

### DevOps Tools
- Kubernetes
- Terraform



## Key Comparisons
1. **Full SDLC Automation vs. Manual Setup**
   - Unlike traditional development requiring manual setup for coding, testing, and deployment, Prompt Flow automates the entire SDLC, significantly reducing time and complexity.

2. **Dynamic Web Access for Real-Time Updates vs. Static Frameworks**
   - While current tools rely on predefined support for frameworks, Prompt Flow dynamically accesses web resources for up-to-date documentation, enabling it to adapt to cutting-edge frameworks and evolving languages effortlessly.

## Comprehensive Infrastructure
- Utilizes Docker, LangChain, and access to cloud providers (AWS, GCP) for dynamic project execution, deployment, and web access, supporting CI/CD integration and real-time updates for evolving frameworks.

## LLM and LangChain Optimization
![LLM Optimization Image](path/to/llm-optimization-image.png)
- Features an optimized LLM integrated with LangChain for natural language processing, focusing on efficient prompt handling, accurate code generation, and seamless cloud deployment.

## Installation

To set up Prompt Flow locally, follow these steps:

### Prerequisites
- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- Make sure you have [Git](https://git-scm.com/downloads) installed.
- Make sure you Create [GeminiApiKey](https://ai.google.dev/gemini-api/docs/api-key)

### Steps to Install
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Prompt-flow.git
1. **Build the Docker Image**:
   ```bash
   docker build -t your-image-name .

1. **Run the Docker container**:
   ```bash
   docker run -p 8080:80 your-image-name
   
1. **Configure Environment Variables:**:
   ```bash
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   GCP_PROJECT_ID=your_project_id
   GOOGLE_API_KEY=YOUR_GEMINI_API_KEY

1. **Install Dependencies (if applicable):**:
   ```bash
   npm install
   pip install -r requirements.txt
