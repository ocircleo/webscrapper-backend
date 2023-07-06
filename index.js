const express = require("express");
const cherrio = require("cheerio");
const axios = require("axios");
const app = express();

// middlewere
app.use(express.json());
const port = 5000;
const url = "https://www.theguardian.com/international";
axios(url).then((response) => {
  const html = response.data;
  const articles = [];
  const $ = cherrio.load(html);
  $(".fc-item__title", html).each(function() {
    const title = $(this).text(),
      url = $(this).find("a").attr("href");
    articles.push({ title, url });
  });
    console.log(articles)
}).catch(errro=> console.log(errro))

app.listen(port, () => {
  console.log("app is runnig in port 300");
});
