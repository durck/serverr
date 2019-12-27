import telebot


def tel(mes, i):
    token = '1066066499:AAGhCqzmxLO-78UY6JbPRMNdgJ8SWjqVaiA'
    bot = telebot.TeleBot(token)
    bot.send_message(i, mes, parse_mode="Markdown")
