# 🚀 Cloud Threat Detection & Auto-Response System

## 📌 Overview

This project is a cloud-based security monitoring system that detects suspicious login activities in AWS and automatically triggers alerts and backend logging.

It integrates AWS services with a custom backend to create a real-time threat detection pipeline.

---

## 🛠️ Technologies Used

* AWS CloudTrail
* AWS CloudWatch
* AWS Lambda
* Node.js (Express)
* MongoDB Atlas
* GitHub & Render (Deployment)

---

## ⚙️ Architecture

CloudTrail → CloudWatch → Alarm → Lambda → Backend API → MongoDB

---

## 🚨 Features

* Detects failed login attempts
* Tracks suspicious account activities
* Sends real-time data to backend API
* Stores logs in MongoDB database
* Scalable cloud-based architecture

---

## 🧪 API Endpoints

### GET /threats

Fetch all detected threats

### POST /threat

Store new threat data

---

## 🌐 Deployment

Backend deployed using Render and connected with MongoDB Atlas.

---

## 📸 Proof

Screenshots of AWS setup, alerts, and backend execution are included.

---

## 🚀 Future Improvements

* Add IP blocking using AWS WAF
* Build frontend dashboard (React)
* Implement real-time alerts via email/SMS

---

## 👨‍💻 Author

Adity
