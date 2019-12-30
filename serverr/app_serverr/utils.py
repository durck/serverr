

def check_pass(str):
    try:
        p = passs.objects.get("pass")
    except Exception:
        return check_id(str)
    if str == p:
        return {"status": True}
    return {"status": False, "text": "пароль не верный"}


    def check_id(str):
        try:
            l = id_list.objects.in_bulk()
        except:
            return {"status": False, "text": "пароль не установлен и не удаётся получить список id"}
        for id in l:
            if str(l[id].number) == str:
                return {"status": True}
        return {"status": False, "text": "пароль не установлен и неверный id"}             
