let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming7 BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', wm2, m, false)
}
handler.help = ['flaming5'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming5)$/i

module.exports = handler
