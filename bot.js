if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "%" ; // البرفكس 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
var definedRoleName;
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "ar") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}ar<role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }     
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user); 
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
}) 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
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
















  

 
















    
client.login(process.env.BOT_TOKEN)
