const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const app = express();

app.use(express.json());

const configuration = new Configuration({
   apiKey: process.env.OPENAI_API_KEY,
});

app.post("/professional", async (req, res) => {
   try {
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: req.body.message,
         max_tokens: 64,
         temperature: 0,
         top_p: 1.0,
         frequency_penalty: 0.0,
         presence_penalty: 0.0,
         stop: ["\n"],
      });
      data = response.data.choices[0].text;
      return res.status(200).send({ success: true, data });
   } catch (error) {
      res.status(500).send({
         success: false,
         error: error.response ? error.response.data : "Server error",
      });
      console.log(error);
   }
});

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
   console.log(`Server started at http://localhost:${PORT}`);
});
