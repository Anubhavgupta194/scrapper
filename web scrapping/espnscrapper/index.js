const request = require('request');
const cheerio= require('cheerio')
const fs= require('fs');
const path= require('path')

const allmatchobj= require('./AllMatch');


let filepath= path.join(__dirname,"ipl");

createfolder(filepath)

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595",cb)
 function cb(error,response,body)
 {
       if(error){
         console.log(error);
       }
       else{
         getlink(body);
       }
 }

 function getlink(html){
     let selltool=cheerio.load(html);
     let content=selltool( 'a[data-hover ="View All Results"]' );      // this is the way of  css selectors har cheez single quote ke andar hona chaiye

     const fullLink= "https://www.espncricinfo.com/"+content.attr('href') 
     console.log(fullLink);
     allmatchobj.GetAllMatch(fullLink);


 }

 function createfolder(filepath)
 {
   if(fs.existsSync(filepath)==false)
   {
     fs.mkdirSync(filepath)
   }
 }





