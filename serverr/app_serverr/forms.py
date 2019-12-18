from django import forms


class login(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={"class": "textfield", "placeholder": "Телефон или email"}))
    pas = forms.CharField(widget=forms.PasswordInput(attrs={"class": "textfield", "placeholder": "Пароль"}))


class full_login(forms.Form):
    email = forms.CharField(widget=forms.TextInput(attrs={"class": "big_text", "placeholder": "Телефон или email", "name": "email", "id": "email"}))
    pas = forms.CharField(widget=forms.PasswordInput(attrs={"class": "big_text", "placeholder": "Пароль", "name": "pass", "id": "pass"}))
