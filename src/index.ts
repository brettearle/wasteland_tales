import { makeApp } from "./app.js";

const PORT = Number(process.env.PORT) || 2222;

const server = makeApp(PORT);

console.log("server running on: ", PORT);
