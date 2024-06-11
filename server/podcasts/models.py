from django.db import models
from .utils import extract_dominant_color, update_theme_field

def podcast_poster(instance, filename):
    return 'podcasts/posters/{filename}'.format(filename=filename)

class Podcasts(models.Model):
    title = models.CharField(max_length=255, verbose_name="Podcast Title")
    poster = models.ImageField(upload_to=podcast_poster, blank=True, null=True, verbose_name="Podcast poster")
    description = models.TextField(verbose_name="Podcast Description")
    theme = models.JSONField(blank=True, null=True, default=dict, verbose_name="Podcast Theme")
    host = models.CharField(max_length=255, verbose_name="Host")
    topics = models.CharField(max_length=255, blank=True, null=True)
    date_published = models.DateTimeField(auto_now_add=True, verbose_name="Date Published")
    date_modified = models.DateTimeField(auto_now=True, verbose_name="Date Modified")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Podcasts"
        ordering = ['title']

    def save(self, *args, **kwargs):
        update_theme = False
        if self.pk:
            old_instance = Podcasts.objects.get(pk=self.pk)
            if old_instance.poster != self.poster:
                update_theme = True
        else:
            update_theme = True

        super().save(*args, **kwargs)

        if update_theme:
            if self.poster:
                image_path = self.poster.path
                color = extract_dominant_color(image_path)
                update_theme_field(self, color)
            else:
                default_colors = {
                    'color': 'rgb(255,255,255)',
                    'text': 'rgb(0,0,0)'
                }
                self.theme = default_colors
                super().save(update_fields=['theme'])

def episode_poster(instance, filename):
    return 'episodes/posters/{filename}'.format(filename=filename)

class Episodes(models.Model):
    podcast = models.ForeignKey(Podcasts, related_name='episodes', on_delete=models.CASCADE, verbose_name="Podcast")
    title = models.CharField(max_length=255, verbose_name="Episode Title")
    poster = models.ImageField(upload_to=episode_poster, blank=True, null=True, verbose_name="Episode poster")
    description = models.TextField(verbose_name="Episode Description")
    theme = models.JSONField(blank=True, null=True, default=dict, verbose_name="Episode Theme")
    guests = models.CharField(max_length=255, blank=True, null=True, verbose_name="Guests")
    duration = models.DurationField(default=0, verbose_name="Duration")
    date_published = models.DateTimeField(auto_now_add=True, verbose_name="Date Published")
    date_modified = models.DateTimeField(auto_now=True, verbose_name="Date Modified")

    def __str__(self):
        return f"{self.podcast.title} - {self.title}"

    class Meta:
        verbose_name = "Episodes"
        ordering = ['podcast', 'title']
        indexes = [
            models.Index(fields=['podcast', 'title']),
        ]

    def save(self, *args, **kwargs):
        update_theme = False
        if self.pk:
            old_instance = Episodes.objects.get(pk=self.pk)
            if old_instance.poster != self.poster:
                update_theme = True
        else:
            update_theme = True

        super().save(*args, **kwargs)

        if update_theme:
            if self.poster:
                image_path = self.poster.path
                color = extract_dominant_color(image_path)
                update_theme_field(self, color)
            else:
                default_colors = {
                    'color': 'rgb(255,255,255)',
                    'text': 'rgb(0,0,0)'
                }
                self.theme = default_colors
                super().save(update_fields=['theme'])
