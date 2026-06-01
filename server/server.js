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
app.use(express.json({ limit: "10mb" }));

const limiter = rateLimit({  // Rate Limiting.
    windowMs: 15 * 60 * 1000, // 15ms 
    max: 100,
    message: "Too many requests from this IP, please try again after some time."
})
app.use(limiter);


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const client = new OpenAI({
    apiKey: GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
})


// ===== Code explanation endpoint =====
app.post("/api/explain-code", async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code) {
            return res.status(400).json({ error: "Code is required" })
        }

        const messages = [
            {
                role: "system",
                content: "You are an expert code explainer. Explain the code in a concise, clear, and easy-to-understand manner. Include examples if required."
            },
            {
                role: "user",
                content: `Please explain this ${language} code: \n\n${code}`
            },
        ];

        const response = await client.chat.completions.create({
            model: "gemini-2.5-flash",
            messages,
            temperature: 0.2,
            max_tokens: 8192,
        });

        const explanation = response?.choices[0]?.message?.content;
        if (!explanation) {
            return res.status(500).json({ error: "Failed to generate explanation." });
        }

        res.json({ explanation, language: language || "unknown" })

    } catch (error) {
        console.error("Code Explain API Error:", error);
        res.status(500).json({ error: "Server error", details: error.message })
    }
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});