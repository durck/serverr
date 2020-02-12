import telebot
from .config import *

bott = telebot.AsyncTeleBot(TELEGRAM_TOKEN)


@bott.message_handler(commands=['start'])
def get_text_message(message):
    bott.reply_to(message, "How are you?)")


@bott.message_handler(func=lambda message: True)
def echo_all(message):
    bott.send_message(message.from_user.id, "Send me another word or command!")
