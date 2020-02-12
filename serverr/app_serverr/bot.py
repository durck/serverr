import telebot

bot = telebot.AsyncTeleBot(TELEGRAM_TOKEN)


@bot.message_handler(commands=['start'])
def get_text_message(message):
    bot.reply_to(message, "How are you?)")
