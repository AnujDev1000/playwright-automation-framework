require('dotenv').config();
const OpenAi = require("openai");

const Client = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY
})

async function askAi(prompt){
 const response = await Client.responses.create({
    model: "gpt-5-mini",
    input: prompt
 })

 return response.output_text
}

module.exports = {
    askAi
}