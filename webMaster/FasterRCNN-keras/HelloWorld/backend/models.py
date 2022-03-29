from django.db import models
from . import system
# Create your models here.

class Image(models.Model):
    image = models.ImageField(upload_to='assets/inputimage')

    class Meta:
        db_table = 'image'
        verbose_name = '图片'
        verbose_name_plural = verbose_name

class Components(models.Model):
    image = models.ImageField(upload_to='assets')

    class Meta:
        db_table = 'components'
        verbose_name = '组件'
        verbose_name_plural = verbose_name
