let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .naruto BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://api tiodevhost.my.id/api/photooxy/naruto?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', wm2, m, false)
}
handler.help = ['naruto', 'flaming8'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(naruto|flaming8)$/i

module.exports = handler