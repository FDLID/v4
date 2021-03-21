
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
🌟 ABOUT USER 🌟

❏ Nama : ${pushname}
❏ Nomer : wa.me/${sender.split("@")[0]}
❏ Uang mu : Rp${uangku},-
❏ XP : ${getLevelingXp(sender)}/${reqXp}
❏ Level : ${getLevelingLevel(sender)}
❏ Role : ${role}
❏ User register : ${_registered.length}
 
「 *TOTAL PENGGUNA* 」

 ${pepolu} user

「 *LIST MENU* 」

❖ *MAKER MENU* ❖

⋙ ${prefix}sticker
⋙ ${prefix}quotemaker
⋙ ${prefix}qrcode
⋙ ${prefix}nulis
⋙ ${prefix}text3d
⋙ ${prefix}tahta
⋙ ${prefix}ttp
 
❖ *FUN MENU* ❖

⋙ ${prefix}lirik
⋙ ${prefix}artinama
⋙ ${prefix}chord
⋙ ${prefix}bisakah
⋙ ${prefix}kapankah
⋙ ${prefix}apakah
⋙ ${prefix}rate
⋙ ${prefix}tebakgambar
⋙ ${prefix}meme
⋙ ${prefix}textlight
⋙ ${prefix}glitchtext
⋙ ${prefix}slap
⋙ ${prefix}emoji
⋙ ${prefix}animequotes
⋙ ${prefix}katacinta
⋙ ${prefix}neonime
⋙ ${prefix}stickerhide ~[error]~
⋙ ${prefix}tampar
⋙ ${prefix}quotes
⋙ ${prefix}moddroid 
⋙ ${prefix}apkpure
⋙ ${prefix}happymod 
 
❖ *MUTUAL* ❖

⋙ ${prefix}mutual
⋙ ${prefix}next
 
❖ *MEDIA MENU* ❖

⋙ ${prefix}brainly
⋙ ${prefix}pinterest
⋙ ${prefix}resepmasakan
⋙ ${prefix}igstalk
⋙ ${prefix}beritahoax
⋙ ${prefix}tiktok
⋙ ${prefix}infonomor
⋙ ${prefix}fototiktok
⋙ ${prefix}bitly
⋙ ${prefix}tiktokstalk
⋙ ${prefix}ssweb
⋙ ${prefix}kbbi
 
❖ *DOWLOADER* ❖

⋙ ${prefix}ytmp3
⋙ ${prefix}ytmp4
⋙ ${prefix}joox
 
❖ *NSFW* ❖

⋙ ${prefix}anjing
⋙ ${prefix}blowjob
⋙ ${prefix}nekonime
⋙ ${prefix}pokemon
⋙ ${prefix}husbu
⋙ ${prefix}nangis
⋙ ${prefix}cium
⋙ ${prefix}peluk
⋙ ${prefix}ranime
 
❖ *LIMIT DAN UANG* ❖

⋙ ${prefix}limit
⋙ ${prefix}buylimit
⋙ ${prefix}transfer
⋙ ${prefix}dompet
⋙ ${prefix}giftlimit
⋙ ${prefix}leaderboard
 
❖ *GROUP MENU* ❖

⋙ ${prefix}delete
⋙ ${prefix}hidetag
⋙ ${prefix}blocklist
⋙ ${prefix}grouplist
⋙ ${prefix}level
⋙ ${prefix}linkgc
⋙ ${prefix}tagall
⋙ ${prefix}setpp
⋙ ${prefix}add
⋙ ${prefix}kick
⋙ ${prefix}setname
⋙ ${prefix}setdesc
⋙ ${prefix}demote
⋙ ${prefix}promote
⋙ ${prefix}listadmin
⋙ ${prefix}group [buka/tutup]
⋙ ${prefix}leveling [enable/disable]
⋙ ${prefix}nsfw [1/0]
⋙ ${prefix}simih [1/0]
⋙ ${prefix}welcome [1/0]
⋙ ${prefix}antilink [1/0]
⋙ ${prefix}nobadword [enable/disable]
 
❖ *TOOLS* ❖

⋙ ${prefix}bass
⋙ ${prefix}tomp3
⋙ ${prefix}slowmo
⋙ ${prefix}gemok
⋙ ${prefix}wasted
⋙ ${prefix}tourl
⋙ ${prefix}triggered
⋙ ${prefix}wanted
⋙ ${prefix}facebookpage
⋙ ${prefix}gtav
⋙ ${prefix}costumwp
⋙ ${prefix}pantaimalam
⋙ ${prefix}crossgun
⋙ ${prefix}bakar
⋙ ${prefix}pencil
⋙ ${prefix}tupai
 
❖ *CLOUD STORAGE* ❖

⋙ ${prefix}addsticker
⋙ ${prefix}getsticker
⋙ ${prefix}stickerlist
⋙ ${prefix}addvideo
⋙ ${prefix}getvideo
⋙ ${prefix}videolist
⋙ ${prefix}getimage
⋙ ${prefix}addImage
⋙ ${prefix}imagelist
⋙ ${prefix}addaudio
⋙ ${prefix}getaudio
⋙ ${prefix}audiolist
 
❖ *OWNER MENU* ❖

⋙ ${prefix}bc
⋙ ${prefix}addbadword
⋙ ${prefix}delbadword
⋙ ${prefix}bcgc
⋙ ${prefix}kickall
⋙ ${prefix}setreply
⋙ ${prefix}setprefix
⋙ ${prefix}clearall
⋙ ${prefix}block
⋙ ${prefix}unblock
⋙ ${prefix}leave
⋙ ${prefix}event [1/0]
⋙ ${prefix}clone
⋙ ${prefix}setppbot
 
🌟 ABOUT BOT 🌟

❏ Name : ${client.user.name}
❏ browser : ${client.browserDescription[1]}
❏ server : ${client.browserDescription[0]}
❏ version : ${client.browserDescription[2]}
❏ speed : ${process.uptime()}
❏ handphone : ${client.user.phone.device_manufacturer}
❏ versi wa : ${client.user.phone.wa_version}

「 *POWERED BY FDL* 」
`
}
exports.help = help



  
