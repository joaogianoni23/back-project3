import express from "express";
import { config } from "dotenv";
import filmeRoutes from "./routes/filmeRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4000; // Define a porta do servidor
const app = express();

app.use(express.json()); 
app.get("/", (req, res) => res.json({ message: "API de filmes on!" }));
app.use("/filmes", filmeRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});