let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*˼❄️˹┊「 مرحبآ ↫ ${taguser}」*\n> اهـلًا مـعـك بـوت العقرب > لـلمـساعـدة اكــتب اوامـر او شـرح\n> لإضافة البوت لقروبك اكـتب الـمـطـور\n*✧━━ • ━ 「  ✤  」 ━ • ━━✧*
\n> ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/b1b1f66e3a16652c9d66a.mp4','image.jpg', message, m);
};

handler.customPrefix = /^(بوت)$/i;
handler.command = new RegExp;

export default handler;
