from .models import *

def check_pass(str):
    try:
        p = passs.objects.get(name="pass").pas
    except Exception:
        return check_id(str)
    if str == p:
        return {"status": True}
    return check_id(str)


    def check_id(str):
        try:
            l = id_list.objects.in_bulk()
        except:
            return {"status": False, "text": "доступ запрещён"}
        for id in l:
            if str(l[id].number) == str:
                return {"status": True}
        return {"status": False, "text": "доступ запрещён"}
