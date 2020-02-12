"""serverr URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URL conf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import re_path
from app_serverr import views
from django.views.generic import TemplateView
from ./settings import TELEGRAM_TOKEN

urlpatterns = [
    path('admin/', admin.site.urls),

    re_path(r'^get_loc', views.get_loc, name='get_loc'),
    re_path(r'^clear_ids', views.clear_ids, name='clear_ids'),
    re_path(r'^get_ids', views.get_ids, name='get_ids'),
    re_path(r'^clear_pass', views.clear_pass, name='clear_pass'),
    re_path(r'^set', views.set_pass, name='set_pass'),
    re_path(r'^add', views.id_add, name='id_add'),
    re_path(r'^del', views.id_del, name="id_dell"),
    re_path(r'^m', views.index, name='mobile'),
    re_path(r'^', views.full, name='full'),
]
