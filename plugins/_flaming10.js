let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .pubg BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/pubg?text=Pubg&text2=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', wm2, m, false)
}
handler.help = ['pubg', 'flaming9'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(pubg|flaming9)$/i

module.exports = handler
