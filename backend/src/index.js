import express from 'express';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from './lib/db.js';
import cors from "cors";
import { app, server } from './lib/socket.js';

import path from "path"


app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));

app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

dotenv.config();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

if(process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req,res)=> {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  })
}
server.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
  connectDB();
});