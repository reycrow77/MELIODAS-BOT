function handler(m, { text }) {
if (!text) return conn.reply(m.chat, `${emoji} Por favor, ingresa el texto que quieres transformar.`, m)

let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
m.reply(teks.replace(/[a-z]/gi, v => {
return {
'a': '🄰',
'b': '🄲',
'c': '🄲',
'd': '🄳',
'e': '🄴',
'f': '🄵',
'g': '🄶',
'h': '🄷',
'i': '🄸',
'j': '🄹',
'k': '🄺',
'l': '🄻',
'm': '🄼',
'n': '🄽',
'ñ': '🄽̇',
'o': '🄾',
'p': '🄿',
'q': '🅀',
'r': '🅁',
's': '🅂',
't': '🅃',
'u': '🅄',
'v': '🅅',
'w': '🅆',
'x': '🅇',
'y': '🅈',
'z': '🅉'
}[v.toLowerCase()] || v }))}

handler.help = ['letra1 *<texto>*']
handler.tags = ['fun1']
handler.command = ['letra1']
handler.register = true

export default handler
