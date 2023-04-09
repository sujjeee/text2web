import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    try {
        const { prompt } = await req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is missing' });
        }

        // if (!apiKey) {
        //     return res.status(400).json({ error: 'Add your API key' });
        // }

        const payload = {
            model: "text-davinci-003",
            prompt,
            temperature: 0.7,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 2000,
            n: 1,
        };

        const openaiRes = await fetch('https://api.openai.com/v1/completions', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API}`,
            },
            method: 'POST',
            body: JSON.stringify(payload),
        });

        if (openaiRes.status === 401) {
            return res.status(401).json({ error: 'Invalid API key' });
        }

        if (!openaiRes.ok) {
            return res.status(401).json({ error: 'OpenAI API failed to respond' });
        }

        const result = await openaiRes.json();

        return res.status(200).json({ data: result.choices[0].text });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export default handler;
