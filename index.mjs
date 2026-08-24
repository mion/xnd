import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 1337;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server online, listening...`, { URL: `http://localhost:${port}` });
});
