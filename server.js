const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://admin:06072005@cluster0.fbqzvkq.mongodb.net/threatDB")
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ DB Error:", err));

// ✅ Schema
const ThreatSchema = new mongoose.Schema({
    type: String,
    user: String,
    sourceIP: String,
    time: String
});

// ✅ Model
const Threat = mongoose.model('Threat', ThreatSchema);

// 🚨 POST API (AWS Lambda yahan hit karega)
app.post('/threat', async (req, res) => {
    try {
        const threat = new Threat(req.body);
        await threat.save();

        console.log("🔥 Threat received:", req.body);

        res.status(200).json({ message: "Threat stored successfully" });
    } catch (error) {
        console.error("Error saving threat:", error);
        res.status(500).json({ error: error.message });
    }
});

// 📊 GET API (data check karne ke liye)
app.get('/threats', async (req, res) => {
    try {
        const data = await Threat.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🏠 Test route (optional but useful)
app.get('/', (req, res) => {
    res.send("🚀 Threat Detection Backend Running");
});

// 🚀 Server Start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});