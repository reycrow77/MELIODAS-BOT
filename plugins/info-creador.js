import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('☔');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "fedelanYT",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: fedelanYT 
\nitem1.TEL;waid=5491156178758:5491156178758\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: fedelanyt20@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/fedelanyt\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Argentina 🇦🇷;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'һᥱᥣᥣ᥆, і'm 𝗍һᥱ ᥆𝖿𝖿іᥴіᥲᥣ ᥴrᥱᥲ𝗍᥆r ᥆𝖿 mіkᥙ ᑲ᥆𝗍..',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/xlc90u.jpg',
                sourceUrl: 'https://wa.me/5491156178758?text=Hola+quiero+adquirir+bot',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi desarrollador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;
