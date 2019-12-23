from django.db import models

# Create your models here.


class id_list(models.Model):
    number = models.IntegerField()
    objects = models.Manager()


class passs(models.Model):
    name = models.CharField(max_length=20)
    pas = models.CharField(max_length=20)
    objects = models.Manager()
