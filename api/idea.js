// api/idea.js

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const idea = (req.body && req.body.idea) || "No idea provided";

    const trimmed = String(idea).trim();
    const safeIdea = trimmed === "" ? "Your Game" : trimmed;

    const title = `Game: ${safeIdea}`;
    const tagline = `A personalised prototype based on: "${safeIdea}".`;

    return res.status(200).json({ title, tagline });
  } catch (e) {
    return res.status(400).json({ error: "Bad request" });
  }
}
