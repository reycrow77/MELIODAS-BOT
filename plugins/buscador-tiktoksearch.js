import axios from 'axios';
import fs from 'fs';
import baileys from '@whiskeysockets/baileys';

const {
  proto
} = baileys;

const dev = "✦ BOT CYBER-TIKTOK";
const avatar = fs.readFileSync('./media/avatar.jpg'); // Asegúrate que esta imagen exista
const redes = "https://t.me/tucanal";
const rcanal = null;

let handler = async (message, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(message.chat, "❀ Por favor, ingrese un texto para realizar una búsqueda en TikTok.", message, rcanal);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  try {
    await conn.reply(message.chat, '✧ *BUSCANDO EN EL UNIVERSO TIKTOK...*', message, {
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          showAdAttribution: true,
          title: '♡  ͜ ۬︵࣪᷼⏜݊᷼𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨⏜࣪᷼︵۬ ͜ ',
          body: dev,
          previewType: 0,
          thumbnail: avatar,
          sourceUrl: redes
        }
      }
    });

    const { data } = await axios.get("https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=" + encodeURIComponent(text));
    let searchResults = data.data;
    shuffleArray(searchResults);
    let topResults = searchResults.slice(0, 5);

    for (let result of topResults) {
      await conn.sendMessage(message.chat, {
        video: { url: result.nowm },
        caption: `🎬 *${result.title}*\n📱 TikTok NoWM\n\n🔗 ${result.play}\n\n👾 ${dev}`,
      }, { quoted: message });
      await new Promise(resolve => setTimeout(resolve, 1000)); // delay de 1s entre videos
    }

  } catch (error) {
    conn.reply(message.chat, `⚠︎ *OCURRIÓ UN ERROR:* ${error.message}`, message);
  }
};

handler.help = ["tiktoksearch <texto>"];
handler.register = true;
handler.group = true;
handler.tags = ["buscador"];
handler.command = ["tiktoksearch", "ttss", "tiktoks"];

export default handler;
