const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* ✅ Root route (so Render doesn't show Cannot GET /) */
app.get("/", (req, res) => {
    res.send("Backend is running");
});

/* ✅ Chat endpoint */
app.post("/chat", (req, res) => {
    console.log("Received from Roblox:", req.body);
    res.json({ reply: "Backend connected successfully!" });
});

/* ✅ IMPORTANT: Use Render's dynamic port */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
