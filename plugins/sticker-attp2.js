let handler = async(m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Contoh Penggunaan:\n\n${usedPrefix + command + ownername}`
let teks = encodeURI(text)
if (command == 'attp') {
conn.sendFile(m.chat, global.API('lolhum', '/api/attp2', {text: teks}, 'apikey'), 'sticker.webp', '', m, { asSticker: true })}
}
handler.command = handler.help = ['attp2']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler