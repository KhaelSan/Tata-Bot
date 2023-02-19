let handler = async(m, { conn }) => {
    conn.sendFile(m.chat, global.API('lolhum', '/api/sticker/dadu', {}, 'apikey'), 'sticker.webp', '', m, { asSticker: true })}

handler.command = handler.help = ['dadu']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler