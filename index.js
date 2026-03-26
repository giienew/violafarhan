import 'dotenv/config';
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// RUTE TANPA LOGIN UNTUK KELUARGA
app.get("/list-tamu", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "nikah.html"));
});

// Endpoint lainnya tetap bisa berjalan sesuai index.js lama kamu
app.get("/", (req, res) => res.send("Exsala API is Running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ON at ${PORT}`));

export default app;