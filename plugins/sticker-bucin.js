let handler = async(m, { conn }) => {
    conn.sendFile(m.chat, global.API('lolhum', '/api/sticker/bucinstick', {}, 'apikey'), 'sticker.webp', '', m, { asSticker: true })}

handler.command = handler.help = ['bucinstick', 'stickerbucin']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler