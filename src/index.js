const dotenv = require('dotenv')
const { Configuration, OpenAIApi } = require('openai')


// Chat gpt prompt
// Suggest best names based on details you are given seperate names with / and no space

// Detail: Store that only sell T-shirts
// Names:  prompt

// load .env
dotenv.config()

const prompt = `Suggest best names based on details you are given seperate names with / and no space\n\nDetail: ${"Coffe shop with dark theme"}\nNames:`

const config = new Configuration({
    apiKey: process.env.AI_TOKEN,
});

const ai = new OpenAIApi(config);

ai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt
}).then(resp => {
    const answers = resp.data.choices[0].text.split("/");

    console.log(answers);
}).catch(err => {
    console.log(err);
})