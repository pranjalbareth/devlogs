# Generated by Django 3.1.2 on 2020-10-04 13:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0023_delete_res'),
    ]

    operations = [
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('short_desc', models.CharField(default='', max_length=300)),
                ('poster', models.ImageField(default='', upload_to='')),
                ('created', models.CharField(default='Sep 09, 2020', max_length=12)),
                ('slug', models.CharField(max_length=100)),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
