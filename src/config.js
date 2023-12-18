import { config } from "dotenv";
config();

export const PORT = 4000;
export const HOST = `http://localhost:${PORT}`;

export const MERCADO_API_KEY= process.env.MERCADO_API_KEY;