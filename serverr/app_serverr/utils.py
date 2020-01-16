from .models import *
import telebot


def tel(mes, i):
    token = '1066066499:AAGhCqzmxLO-78UY6JbPRMNdgJ8SWjqVaiA'
    bot = telebot.TeleBot(token)
    bot.send_message(i, mes, parse_mode="Markdown")


def check_id(st, f):
    try:
        l = id_list.objects.in_bulk()
    except Exception:
        return {"status": False, "text": "доступ запрещён!", "flag": f}
    for id in l:
        if str(l[id].number) == st:
            return {"status": True}
    return {"status": False, "text": "доступ запрещён.", "flag": f}


def check_pass(st):
    try:
        p = passs.objects.get(name="pass").pas
    except Exception:
        return check_id(st, False)
    if str == p:
        return {"status": True, "flag": True}
    return check_id(st, True)
