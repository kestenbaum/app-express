import express from 'express';
import cors from "cors";

const app = express();
const port = Number(process.env.PORT) || 5555;

app.use(cors());

app.get("/about/:username", (req, res) => {
	res.json({ message: `Hello, ${req.params.username}!` });
});

app.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));
