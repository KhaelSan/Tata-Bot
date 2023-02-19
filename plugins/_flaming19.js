let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming4 BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', wm2, m, false)
}
handler.help = ['iluminated', 'flaming15'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(iluminated|fling15)$/i

module.exports = handler
