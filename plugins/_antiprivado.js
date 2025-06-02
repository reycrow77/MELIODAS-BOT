export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return true;
  if (m.isGroup) return false;
  if (!m.message) return true;

  const text = m.text?.toUpperCase() || '';
  if (text.includes('PIEDRA') || text.includes('PAPEL') || text.includes('TIJERA') || text.includes('CODE') || text.includes('JADIBOT')) return true;

  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings?.[conn?.user?.jid] || {};
  
  if (m.chat === '120363402097425674@newsletter) return true;

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
      `> 𝗛𝗼𝗹𝗮 @${m.sender.split`@`[0]} ✨\n\n` +
      `> Por ahora los comandos solo están activos en grupos.\n` +
      `> Si quieres usar la bot, únete a este grupo:\n` +
      `> \`https://chat.whatsapp.com/FX6eYrqXtt9L76NDpOm2K7\`\n\n` +
      `> Te esperamos en nuestra comunidad 💙`,
      false,
      { mentions: [m.sender] }
    );
    await conn.updateBlockStatus(m.chat, 'block');
  }
  return false;
}
