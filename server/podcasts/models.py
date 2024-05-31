from django.db import models

class Podcast(models.Model):
    title = models.CharField(max_length=255)
    poster = models.URLField()
    description = models.TextField()
    theme = models.CharField()
    duration = models.TimeField()
    host = models.CharField(max_length=255)

    def __str__(self):
        return self.title
