import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('☔');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "el insano",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: el insano 
\nitem1.TEL;waid=51920826559:51920826559\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: fedelanyt20@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/fedelanyt\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Argentina 🇦🇷;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'һ᥆ᥣᥲ s᥆ᥡ s𝗍ᥲ𝖿𝖿 ძᥱ mіkᥙ ᑲ᥆𝗍.',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/xlc90u.jpg',
                sourceUrl: 'https://wa.me/51920826559?text=Hola+quiero+adquirir+bot',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi staff*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner3', 'creador3'];
handler.tags = ['info'];
handler.command = /^(owner3|creator3|creador3|staff3)$/i;

export default handler;
