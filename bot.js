const fs = require("fs"); //npm i fs
const Canvas = require("canvas");//for linux = npm i canvas | for windows = npm i canvas-prebuilt
const jimp = require("jimp");// npm i jimp
const prefix = "="; // prefix
const Discord = require('discord.js');// npm i discord.js
const client = new Discord.Client();
const id = JSON.parse(fs.readFileSync("./id/mozo.json", "utf8"));
client.on("message", message => {
  if (message.author.bot) return;
fs.writeFile('./id/mozo.json', JSON.stringify(id), (err) => {
if (err) console.error(err);
});
});
      client.on('message', message => {
          if(!id[message.author.id]) id[message.author.id] ={
              textrank: 1,
              points: 1
          };
          if(message.author.bot) return;
          id[message.author.id].points = Math.floor(id[message.author.id].points+4);
          if(id[message.author.id].points > 10) {
              id[message.author.id].points = 10;
              id[message.author.id].level = Math.floor(id[message.author.id].level+4);
          }
          fs.writeFile('./id/mozo.json', JSON.stringify(id), (err) => {
if (err) console.error(err);
});
   
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "id")) {
                               let user = message.mentions.users.first();
         var human = message.mentions.users.first();
            var author;
            if(human) {
                author = human;
            } else {
                author = message.author;
            }
          var mentionned = message.mentions.members.first();
             var ah;
            if(mentionned) {
                ah = mentionned;
            } else {
                ah = message.member;
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!id[getvalueof.id]) id[getvalueof.id] = {textrank: 0,points: 1};
            let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
            fs.readFile("./id/rank.png", function (err, Background) {
            if (err) return console.log(err);
            let id = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
 
});
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        // N A M E  |  S H A D O W
                        ctx.font = 'bold 18px Arial';
                        ctx.fontSize = '18px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 253, 79);
 
                        // N A M E
                        ctx.font = 'bold 18px Arial';
                        ctx.fontSize = '18px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${getvalueof.username}`, 253, 77);
 
 
                        // T E X T  R A N K
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${id[getvalueof.id].textrank}`, 252, 124);
 
                        // P O I N T S
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '12px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`${id[getvalueof.id].points}`, 253, 171);
 
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 26, 69, 93, 93);
                       
message.channel.sendFile(canvas.toBuffer());
 
});
});
}
});
});










client.login("BOT_TOKEN");
