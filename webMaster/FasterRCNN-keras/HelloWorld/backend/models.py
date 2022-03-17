from django.db import models

# Create your models here.

class Image(models.Model):
    image = models.ImageField(upload_to='assets')

    class Meta:
        db_table = 'image'
        verbose_name = '图片'
        verbose_name_plural = verbose_name
