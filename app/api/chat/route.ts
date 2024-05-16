import { promises as fs } from 'fs';
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";


export async function POST(req: Request) {
  const json = await req.json();
  const { messages, token } = json;
  const fileContent = await fs.readFile(`${process.cwd()}/mockData/${json.messages.at(-1).content}.txt`, 'utf-8')
  messages.splice(-1, 1, { role: 'user', content: fileContent });

  if ((!token || token === "null") && !process.env.OPENAI_API_KEY) {
    return Response.json({
      error: "No API key provided.",
    });
  }

  const openai = new OpenAI({
    apiKey: token || process.env.OPENAI_API_KEY,
  });


  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    stream: true,
    temperature: 0.5,
    messages: [{ role: "system", content: "You are a movie review critic who writes movies for concerned parents around the content that their children watch, you are supplied a movie script to make your judgements. You should analyse the violence and the language being used in the movie as well as the themes to ensure that they are appropriate. Give a rating for each category out of 5 and a short sentence explaining why. Finally give an overall yes or no for watchability for a kid of 6 years old" } as ChatCompletionMessageParam].concat(
      messages
    ),
    max_tokens: 4000,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}