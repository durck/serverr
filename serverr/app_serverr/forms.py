from django import forms


class login(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={"class": "textfield", "placeholder": "Телефон или email"}))
    pas = forms.CharField(widget=forms.PasswordInput(attrs={"class": "textfield", "placeholder": "Пароль"}))
