//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
const Discord3 = require('discord.js');
const Discord4 = require('discord.js');
const Discord5 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord1.Client();
const client2 = new Discord2.Client();
const client3 = new Discord3.Client();
const client4 = new Discord4.Client();
const client5 = new Discord5.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "520296992161792000"; 
var ChannelID = "543173974205399046";
var prefix = "F";
console.log('Flix :) Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
    function timerFunc() {
        client1.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client2.on('ready', () => {
    function timerFunc() {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client3.on('ready', () => {
    function timerFunc() {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client4.on('ready', () => {
    function timerFunc() {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
client5.on('ready', () => {
    function timerFunc() {
        client5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7));
    }
     setInterval(timerFunc, 1500);
    });
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix1 + "say")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix2 + "say")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client3.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix3 + "say")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client4.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix4 + "say")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
client5.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix5 + "say")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1).join(" ");
message.channel.send(args);
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("error", function(err) {
 return console.log(err);
});
client2.on("error", function(err) {
 return console.log(err);
});
client3.on("error", function(err) {
 return console.log(err);
});
client4.on("error", function(err) {
 return console.log(err);
});
client5.on("error", function(err) {
 return console.log(err);
});
//////////////////////////////////////////////////////////////////////////////////////////////////
var prefix1 = "1";
var prefix2 = "2";
var prefix3 = "3";
var prefix4 = "4";
var prefix5 = "5";
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT1_TOKEN);
client2.login(process.env.BOT2_TOKEN);
client3.login(process.env.BOT3_TOKEN);
client4.login(process.env.BOT4_TOKEN);
client5.login(process.env.BOT5_TOKEN);
