let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Contoh penggunaan:\n\n${usedPrefix + command} pentol`

      let res = await fetch(global.API('ibeng', '/api/download/stickersearch', { text: text }, 'apikey'))
      // let res = await fetch('https://api.ibeng.tech/api/download/stickersearch?text=pentol&apikey=ibeng')
     
  /* 
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  */
      let resjson = await res.json()
      let tata = resjson.result.url
      await conn.sendFile(m.chat, tata, 'sticker.webp', '', m, { asSticker: true })
}
handler.help = ['stickerly'].map(v => v + ' <text>')
handler.tags = ['internet', 'sticker']
handler.command = /^(stickerly)$/i

module.exports = handler