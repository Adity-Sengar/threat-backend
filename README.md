# 🚀 Cloud Threat Detection & Auto-Response System

## 📌 Overview

This project is a cloud-based automated threat detection system that monitors and logs suspicious activities using AWS services. It integrates AWS Lambda, EventBridge Scheduler, a Node.js backend, and MongoDB Atlas to create a complete end-to-end pipeline.

---

## 🧠 Architecture

EventBridge Scheduler → AWS Lambda → Backend API (Render / Docker) → MongoDB Atlas

---

## 🛠️ Tech Stack

* **AWS Lambda** – Executes serverless functions
* **AWS EventBridge Scheduler** – Triggers Lambda periodically
* **Node.js (Express)** – Backend API
* **MongoDB Atlas** – Cloud database
* **Docker** – Containerization
* **Render** – Backend deployment
* **GitHub** – Version control

---

## ⚙️ Features

* Automated threat simulation using AWS
* Real-time data logging
* REST API integration
* Cloud deployment
* Containerized backend using Docker
* Scalable and serverless architecture

---

## 🔄 Workflow

1. EventBridge Scheduler triggers Lambda every 5 minutes
2. Lambda generates simulated threat data
3. Data is sent to the backend API
4. Backend stores the data in MongoDB
5. Data can be retrieved using API endpoints

---

## 📡 API Endpoints

### 🔹 GET /threats

Fetch all stored threat logs

### 🔹 POST /threat

Store a new threat log

Example request:

```json
{
  "type": "failed-login",
  "user": "test-user",
  "sourceIP": "192.168.1.1",
  "time": "2026-05-02"
}
```

---

## 🌐 Live Backend

👉 https://threat-backend-hulu.onrender.com

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t threat-backend .
```

### Run Container

```bash
docker run -p 3001:3000 --env-file .env threat-backend
```

---



## 🔐 Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

---

## 🚀 Future Improvements

* Real-time dashboard (React)
* Email/SMS alerts
* Real threat detection using CloudTrail logs
* Role-based authentication

---

## 🏁 Conclusion

This project demonstrates how cloud services and backend technologies can be integrated to build a scalable and automated threat detection system using a serverless architecture.

---

## 👨‍💻 Author

Adity
