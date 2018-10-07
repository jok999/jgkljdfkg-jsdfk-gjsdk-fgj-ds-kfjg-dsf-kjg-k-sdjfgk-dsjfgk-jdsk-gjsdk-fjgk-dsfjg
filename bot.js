const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs'); 
 
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
 
 
 

 
 
let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == '%نقاطي'){
        var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,'التجميع عن طريق الالعاب',   true) 
        .setColor('RANDOM')
        .setFooter('Games', client.user.avatarURL);
        message.channel.sendEmbed(embed)
    };
    if (message.content == "%فكك") {    
        var x = ['فيكو الحلو', 'طيارة', 'عرفا', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'سن' , 'استعن بالله' , 'عدل' , 'جميل جمال' , 'محمد الشمراني' , 'المالديف'];
        var x2 = ['ف ي ك و ا ل ح ل و', 'ط ي ا ر ة', 'عرفا', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'س ن', 'ا س ت ع ن ب ا ل ل ه', 'ع د ل', 'ج م ي ل ج م ا ل', 'م ح م د ا ل ش م ر ا ن ي', 'ا ل م ا ل د ي ف'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` نوع اللعبة : فكك
فكك الكلمة الآتية :   【 ${x[x3]} 】
الوقت : 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('لم يقم احد بتفكيك الكلمة في الوقت المناسب')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> { 
 
        points[message.author.id].points +=1
            message.channel.send(`${message.author} : صاحب الإجابة 
☻ لقد قمت بكتابة الجواب الصحيح ☻
نقاطك : 【 ${points[message.author.id].points } 】`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
        if (message.content == "%ركب") {    
        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ر و ق ن'];
        var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'روقن'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`نوع اللعبة : ركب 
ركب الأحرف الآتية : 【 ${x[x3]} 】 
الوقت : 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('لم يقم احد بتركيب الحروف في الوقت المناسب')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`${message.author} : صاحب الإجابة 
☻ لقد قمت بكتابة الجواب الصحيح ☻
نقاطك : ⇤ ${points[message.author.id].points } ⇥`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
        if (message.content == "%احسب") {    
        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44.5+44.5', '3500 ÷ 385', '3500 ÷ 588'];
        var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89' , '9' , '5'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`نوع اللعبة : احسب
احسب اأرقام الآتية : 【 ${x[x3]} 】 
الوقت : 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('لم يقم احد بالعملية الحسابية الصحيحة')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`${message.author} : صاحب الإجابة 
☻ لقد قمت بكتابة الجواب الصحيح ☻
نقاطك : ⇤ ${points[message.author.id].points } ⇥`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
   
  if (message.content == "%عواصم") {
        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];
        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`نوع اللعبة : عواصم
ماهي عاصمة : 【 ${x[x3]} 】 
الوقت : 15 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('لم يقم احد بكتابة العاصمة الصحيحة في الوقت المناسب')
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`${message.author} : صاحب الإجابة 
☻ لقد قمت بكتابة الجواب الصحيح ☻
نقاطك : ⇤ ${points[message.author.id].points } ⇥`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == "%لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];
        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`نوع اللعبة : الغاز
حل اللغز لآتي : 【 ${x[x3]} 】 
الوقت : 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('لم يقم احد بحل اللغز في الوقت المناسب')
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`${message.author} : صاحب الإجابة 
☻ لقد قمت بكتابة الجواب الصحيح ☻
نقاطك : ⇤ ${points[message.author.id].points } ⇥`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "%رتب") {    
        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];
        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`نوع اللعبة : رتب
رتب الأحرف لآتية  : 【 ${x[x3]} 】 
الوقت : 25 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(' لم يقم احد بترتيب الحروف في الوقت المناسب')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {
 
            points[message.author.id].points +=1
            message.channel.send(`${message.author} : صاحب الإجابة 
☻ لقد قمت بكتابة الجواب الصحيح ☻
نقاطك : ⇤ ${points[message.author.id].points } ⇥`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    });
 
   
    

   
   
   
   
    client.on("message", message => {
 if (message.content === "%العاب") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(` ✧▬▬▬▬▬  **الالعاب**  ▬▬▬▬▬✧
 
%قم بتفكيك الجمل  ➼ فكك
 
%قم بتركيب الجمل  ➼ ركب
 
%قم بحل المسائل الرياضية  ➼ احسب
 
%قم بأيجاد العواصم المطلوبة ➼ عواصم
 
%قم بحل الألغاز ➼ لغز
 
%قم بتجميع الحروف ➼ رتب
 
%لعرض النقاط الخاصة بك ➼ نقاطي
 
 ✧▬▬▬▬▬ **الالعاب** ▬▬▬▬▬✧`)
   message.channel.sendEmbed(embed)
   
   }
   });





  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let coins = require("./coins.json");
    
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#5074b3")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
});


client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '%';
    let coins = require("./coins.json");
    
if(cmd === `${prefix}coins`) {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
});







  

  const gif = require("gif-search")
client.on('message', message => {
    var prefix ="%"
    if(message.content.startsWith(prefix + 'gif')) {
console.log('[Gif Search] Developed By Ghost')
        if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
        let args = message.content.split(' ').slice(1).join(' ')
            if (!args) return message.reply('يجب كتابة أسم الصورة')
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
}
});
















    
client.login(process.env.BOT_TOKEN)
