const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .addField(" **<:tplk:776437310119870494>  • Komutlar:**", `> **• [ d!çevir <Kod> ](https://discord.gg/s3xWUucYTF) : Kodunuzu V12 Ye Çevirirsiniz.** \n > **• [ d!istatistik ](https://discord.gg/s3xWUucYTF) : Botun İstatistiğini Gösterir.** \n> **• [ d!çevrilenkod ](https://discord.gg/s3xWUucYTF) : V12 Ye Kaç Kod Çevirilmiş Ona Bakarsınız.** `)
  .addField("<:stormiduyuru:778982795087314964>  • Duyuru:", `> **• Kodlarınız 900 Karakterden Fazla İse Kodu Ayıra Ayıra Yazınız.**`)
  .addField("<a:ayarlars:773881705013444648>  • Linkler:", "> **• [Davet Et](https://discord.com/oauth2/authorize?client_id=780840708218421299&scope=bot&permissions=123905) • [Destek Sunucusu](https://discord.gg/s3xWUucYTF) • [Web Site (YAKINDA)](https://discord.gg/s3xWUucYTF) •**")
.setFooter("v11 Den v12 Ye", message.author.avatarURL())
.setImage("https://media.discordapp.net/attachments/780773849796313108/780813418197286942/standard_3.gif")
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "kodçevirme",
    usage: "kodçevirme"
}