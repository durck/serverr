import telebot

token = '1066066499:AAGhCqzmxLO-78UY6JbPRMNdgJ8SWjqVaiA'
bot = telebot.TeleBot(token)

def tel(mes, i):
    bot.send_message(i, mes, parse_mode="Markdown")


def check_pass(p):
    pass    
