const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
    console.log("Received from Roblox:", req.body);
    res.json({ reply: "Backend connected successfully!" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
