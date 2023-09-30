import type {NextApiRequest,NextApiResponse} from "next"

import {Configuration, OpenAIApi} from "openai";

type ResponseData = {
    text: string
}

interface GenerateNextApiRequest extends NextApiRequest {
    body: {
        prompt: string
    }
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)