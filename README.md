# 📌 Project Management System (MERN Stack + Docker)

A full-stack Project Management System built using the **MERN stack (MongoDB, Express, React, Node.js)** and containerized using **Docker** to simulate a real-world multi-service architecture.

This project focuses not only on application development but also on **DevOps fundamentals like container networking, service communication, and deployment structure.**

---

## 🚀 Tech Stack

### 🖥 Frontend
- React.js
- Axios
- CSS / Basic UI Components

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- REST API architecture

### 🗄 Database
- MongoDB (Docker container)

### 🐳 DevOps / Infrastructure
- Docker
- Docker Networks
- Containerized services (frontend, backend, database)
- Environment-based configuration

---

## 📦 Features

- Create new projects
- View all projects
- Update project details
- Delete projects
- REST API communication between frontend & backend
- Fully containerized architecture

---

## 🐳 Docker Setup Guide

This project runs using **manual Docker containers (without Docker Compose)**.

---

### 1️⃣ Create Docker Network

```bash
docker network create mongo-network
2️⃣ Run MongoDB Container
docker run --name mongo \
  --network mongo-network \
  -p 27017:27017 \
  -d mongo:latest
3️⃣ Run Backend Container
Make sure your environment variable is set:

MONGODB_PATH=mongodb://mongo:27017/todo
Then run:

docker build -t backend-app .

docker run --name backend \
  --network mongo-network \
  -p 9000:9000 \
  -d backend-app
4️⃣ Run Frontend Container
docker build -t frontend-app .

docker run -p 3000:3000 frontend-app
⚠️ Important Notes
Never use localhost for MongoDB inside containers

Use container name (mongo) for inter-container communication

Ensure both backend and MongoDB are on the same Docker network

MongoDB database (todo) is created automatically on first data insert

Backend must expose 0.0.0.0, not localhost

🧠 Key DevOps Learnings
This project helped me understand real-world system behavior:

Docker container networking and isolation

Why localhost fails inside containers

Service-to-service communication using Docker DNS

Debugging backend failures using logs

Environment variable management in containers

Multi-service architecture design

⚠️ Common Issues Encountered
500 Internal Server Error → usually backend route or req.body issue

MongoDB connection failures → wrong hostname (localhost vs mongo)

Data not saving → schema mismatch or missing JSON parser

Container communication issues → missing shared Docker network

🛠️ Future Improvements
Implement Docker Compose for orchestration

Add CI/CD pipeline (GitHub Actions)

Deploy to cloud (AWS / DigitalOcean)

Add authentication (JWT)

Add monitoring (Prometheus + Grafana)

Implement production reverse proxy (NGINX)

📌 Status
🚧 Actively improving DevOps architecture and moving toward production-grade deployment
