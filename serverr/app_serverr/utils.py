from .models import *

def check_id(str, f):
    try:
        l = id_list.objects.in_bulk()
    except:
        return {"status": False, "text": "доступ запрещён", "flag": f}
    for id in l:
        if str(l[id].number) == str:
            return {"status": True}
    return {"status": False, "text": "доступ запрещён", "flag": f}


def check_pass(str):
    try:
        p = passs.objects.get(name="pass").pas
    except Exception:
        return check_id(str, False)
    if str == p:
        return {"status": True}
    return check_id(str, True)
