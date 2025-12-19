// modules/owner.js

module.exports = async (sock, question) => {

    const config = {
        ownerName: "🝗 𝗠𝘂𝗵𝗮𝗺𝗺𝗮𝗱 𝗨𝘀𝗺𝗮𝗻  🝗",
        ownerNumber: "923XXXXXXXXX",
        whatsappChannel1: "https://whatsapp.com/channel/0029Vb6SwB147XeCTHpikc0O",
        botName: "⚡ 𝙐𝙨𝙢𝙖𝙣 𝙏𝙤𝙤𝙡𝙨 - 𝙈𝘿 ⚡",
        developer: "『 𝙐𝙨𝙢𝙖𝙣 』",
        theme: "⫷ 𝙃𝙖𝙘𝙠𝙚𝙧 𝙈𝙤𝙙𝙚 ⫸",
        wm: "⦿ 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝙐𝙨𝙢𝙖𝙣 ⦿",
        footer: "⚠️ 𝙐𝙨𝙢𝙖𝙣-𝙈𝘿 | 404 𝙄𝙣𝙟𝙚𝙘𝙩𝙤𝙧 ⚠️",
        version: "7.7.7",
        signature: "🜸 𝙐𝙨𝙢𝙖𝙣 𝙃𝙚𝙭 𝙎𝙩𝙪𝙙𝙞𝙤𝙨 🜸"
    };

    console.clear();
    console.log(`
    ╔══════════════╗
      𝐔𝐒𝐌𝐀𝐍 - 𝐌𝐃 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔
    ╚══════════════╝

Owner: ${config.ownerName}
Number: +${config.ownerNumber}

Github: ${config.github}
YouTube: ${config.youtube}
Channel 1: ${config.whatsappChannel1}
Channel 2: ${config.whatsappChannel2}

Bot: ${config.botName}
Theme: ${config.theme}

Version: ${config.version}
Signature: ${config.signature}

${config.footer}
    `);

    await question("\nPress ENTER to go back...");
};