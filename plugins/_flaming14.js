let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .coffee BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/coffee-cup?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', wm2, m, false)
}
handler.help = ['coffee', 'flaming12'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(coffee|flaming12)$/i

module.exports = handler
