# Generated by Django 3.2 on 2022-03-17 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images')),
            ],
            options={
                'verbose_name': '图片',
                'verbose_name_plural': '图片',
                'db_table': 'image',
            },
        ),
    ]
