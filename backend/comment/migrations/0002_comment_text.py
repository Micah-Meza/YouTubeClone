# Generated by Django 4.1.7 on 2023-03-22 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='text',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
