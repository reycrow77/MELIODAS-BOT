let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];
  let name = conn.getName(userId);
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

  const botname = global.botname || "NombreDelBot";
  const textbot = global.textbot || "Descripción del bot";
  const banner = global.banner || "URL de la imagen del banner";
  const redes = global.redes || "URL de las redes sociales";
  const channelRD = global.channelRD || { id: 'id_del_canal', name: 'Nombre del canal' };
  const moneda = global.moneda || 'monedas';

  let txt = `
🩵 *CONFIGURACIÓN DE GRUPO*

🩵 *USA ON / OFF:*

.welcome on
.autoresponder on
.on autoaceptar on
.autorechazar on
.detect on
.antilink on 
.nsfw on
.modoadmin on

🩵 *OPCIONES PARA MI CREADOR (FEDELANYT)*

.antiprivado on
.public on
.serbot on
.restrict on
.autoread on
> ${dev}`.trim();

  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 99999999,
      externalAdReply: {
        title: botname,
        body: wm,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    },
  }, { quoted: m });

};

handler.help = ['on', 'off'];
handler.tags = ['main'];
handler.command = ['on', 'on', 'off', 'off'];

export default handler;

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours} Horas ${minutes} Minutos ${seconds} Segundos`;
}
