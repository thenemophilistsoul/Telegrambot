import fetch from 'node-fetch'
import fs from 'fs';
const wikiRandomUrl =
  'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=pageimages|extracts|info&format=json&inprop=url&explaintext&exchars=130'

async function retrieveWikiPage() {
  try {
    let result = await fetch(wikiRandomUrl)
    let wikiJSON = await result.json()
    return 
    
  } catch (e) {
    console.log('Error in retrieving wiki pages: ', e)
  }
}

const test = new Promise(async (resolve) =>{
    let result =  await fetch(wikiRandomUrl)
    let wikiJSON =  await result.json() 
    resolve(wikiJSON)   
})


test.then((data) => {
    console.log(data)
    let stringFi = JSON.stringify(data)
    fs.writeFile('asd.json',stringFi,(err) =>{

    })
})