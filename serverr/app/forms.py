from django import forms


class UserForm(forms.Form):
    name = forms.CharField()
    age = forms.CharField(label="pass", widget=forms.PasswordInput, initial="1234")
