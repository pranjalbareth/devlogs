# Generated by Django 3.0.7 on 2020-09-22 16:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_auto_20200922_1631'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='time',
        ),
    ]