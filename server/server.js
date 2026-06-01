import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import OpenAI from "openai";


const app = express(); //instantiate the app.
app.use(helmet()); // Security middlewares.
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}))
app.use()

const limiter = rateLimit({  // Rate Limiting.
    windowMs: 15*60*1000, // 15ms 
    max: 100,
    message: "Too many requests from this IP, please try again after some time." 
})
app.use(limiter);

app.use(express.json({ limit: "10mb" }));



const client = new OpenAI();


app.post("/api/explain-code", async (req, res)=>{
    try {
        const { code, language } = req.body;

        if(!code){
            return res.status(400).json({ error: "Code is required" })
        }

    } catch (error) {
        console.error("Code Explain API Error:", error);
        res.status(500).json({ error: "Server error", details: error.message })
    }
})