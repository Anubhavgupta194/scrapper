const request = require('request');
const cheerio= require('cheerio')

const scoredcardobj= require('./scorecard')

function getAllMatchLink(url){
 request(url , function(error , response , html){
        if(error){
               console.log(error)
        }
        else{
               extractAllMatchLink(html)
        } 
 })


}


function extractAllMatchLink(html){
 let $ = cheerio.load(html)


 let scoreCardElemArr = $('a[data-hover="Scorecard"]')

 for(let i=0 ; i<scoreCardElemArr.length ; i++){
        let ScoreCardlink = $(scoreCardElemArr[i]).attr('href')

        let fullLink = 'https://www.espncricinfo.com'+ScoreCardlink;

        scoredcardobj.processcard(fullLink);

        console.log(fullLink)
       
    }


}

module.exports= {
    GetAllMatch: getAllMatchLink
}


