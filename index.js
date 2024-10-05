const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram bot token
const token = `7725549523:AAGqNepEVYBdlkWpzPdA2lZcugRCa6aRoV8`;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Command to start the bot and display welcome message
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Send a message with the link to your website
    bot.sendMessage(chatId, `OK Marketga xush kelibsiz! Quyidagi saytdan mahsulotlar haqida ma'lumot olishingiz mumkin: okmarket6.wixsite.com/okmarket-1`, { parse_mode: 'Markdown' });
});

