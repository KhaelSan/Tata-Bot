//Tata Bot 2023

//Global Owner//
global.owner = ['6282248192917']  // isi jika perlu
global.mods = ['']   // isi jika perlu
global.prems = ['']  // isi jika perlu

//Owner Number & payment//
global.ownername = 'Kael'
global.numberowner = '6282248192917'
global.dana = global.pulsa = global.gopay = '6282248192917'

//Nama Bot & Grouplink//
global.namebot = 'Tata-Botz'
global.gc = 'https://chat.whatsapp.com/GNK3daL7LPm95yUBvl021u'
global.web = 'https://wa.me/628114811363' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://instagram.com/khaelll._\nhttps:/instagram.com/sync.khael'

//Tampilan wm Bot dan pesan bot//
global.zenzkey = 'BagasPrdn'
global.wm = '©ㅤTata-Botz'
global.watermark = wm
global.wm2 = '⫹⫺ Tata-Botz'
global.wm3 = '©ㅤTata-Botz'
global.wm4 = '© Kael 2k22'
global.fla = 'https://api.tiodevhost.my.id/api/photooxy/shadow-sky?text='
global.wait = '*⫹⫺Tunggu sebentar...*'
global.eror = '_*Error!*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = '⫹⫺ㅤBy\nTata-Botz'
global.author = 'chat bot:\nwa.me/628114811363'

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  dzx: 'https://api.dhamzxploit.my.id',
  lolhum: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  rey: 'https://sekha.me',
  ibeng: 'https://api.ibeng.tech'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.lolhuman.xyz': 'tatabotz10',
  'https://api.ibeng.tech': 'ibeng'
}

//Setting Rpg//
global.multiplier = 100 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
