# Generated by Django 5.0.6 on 2024-06-02 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('podcasts', '0002_alter_podcasts_theme'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='episodes',
            options={'ordering': ['podcast', 'title'], 'verbose_name': 'Episodes'},
        ),
        migrations.AlterModelOptions(
            name='podcasts',
            options={'ordering': ['title'], 'verbose_name': 'Podcasts'},
        ),
        migrations.AlterField(
            model_name='podcasts',
            name='poster',
            field=models.TextField(blank=True, null=True),
        ),
    ]