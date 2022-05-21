import { Telegraf } from "Telegraf";
import fetch from "node-fetch";

const bot = new Telegraf("5394427251:AAEfd5sScgAwGBk01VttcsUzApwlFCaYxsE");
bot.start((ctx) => {
  const wikiRandomUrl =
    "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=pageimages|extracts|info&format=json&inprop=url&explaintext&exchars=130";

  const test = new Promise(async (resolve) => {
    let result = await fetch(wikiRandomUrl);
    let wikiJSON = await result.json();
    // let wikiJSON = JSON.parse(wikiJSON)
    resolve(wikiJSON);
  });





  
  test.then((data) => {
    let Wtitle = data;
    // console.log(Wtitle.query.pages[0])
    let TitleW = Object.values(Wtitle.query.pages)[0].title;
    let extractW = Object.values(Wtitle.query.pages)[0].extract;
    let fullurlW = Object.values(Wtitle.query.pages)[0].fullurl;
    console.log(TitleW),
    ctx.reply(extractW);
    ctx.reply(TitleW);
    ctx.reply(fullurlW);
  });
});

bot.launch();
