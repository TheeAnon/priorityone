from django.db import models

class Podcast(models.Model):
    title = models.CharField(max_length=255, verbose_name="Podcast Title")
    poster = models.URLField(blank=True, null=True, verbose_name="Poster URL")
    description = models.TextField(verbose_name="Podcast Description")
    theme = models.CharField(max_length=255, verbose_name="Podcast Theme")
    host = models.CharField(max_length=255, verbose_name="Host")
    date_published = models.DateTimeField(auto_now_add=True, verbose_name="Date Published")
    date_modified = models.DateTimeField(auto_now=True, verbose_name="Date Modified")
    
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Podcast"
        verbose_name_plural = "Podcasts"
        ordering = ['title']

class Episode(models.Model):
    podcast = models.ForeignKey(Podcast, related_name='episodes', on_delete=models.CASCADE, verbose_name="Podcast")
    title = models.CharField(max_length=255, verbose_name="Episode Title")
    poster = models.URLField(blank=True, null=True, verbose_name="Poster URL")
    description = models.TextField(verbose_name="Episode Description")
    theme = models.CharField(max_length=255, verbose_name="Episode Theme")
    guests = models.CharField(max_length=255, verbose_name="Guests")
    duration = models.DurationField(verbose_name="Duration")
    date_published = models.DateTimeField(auto_now_add=True, verbose_name="Date Published")
    date_modified = models.DateTimeField(auto_now=True, verbose_name="Date Modified")

    def __str__(self):
        return f"{self.podcast.title} - {self.title}"

    class Meta:
        verbose_name = "Episode"
        verbose_name_plural = "Episodes"
        ordering = ['podcast', 'title']
        indexes = [
            models.Index(fields=['podcast', 'title']),
        ]
