// src/utils/groqClient.js
import axios from "axios";
import { OPENAI_KEY } from "./constants";
const GROQ_API_KEY = OPENAI_KEY // 🔒 Use env in real apps

const groqClient = axios.create({
  baseURL: "https://api.groq.com/openai/v1",
  headers: {
    Authorization: `Bearer ${GROQ_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export default groqClient;
