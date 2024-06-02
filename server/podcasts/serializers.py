from rest_framework import serializers
from .models import Podcasts, Episodes

class PodcastSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=255, verbose_name="Podcast Title")
    poster = serializers.TextField(required=False)
    description = serializers.TextField(verbose_name="Podcast Description")
    theme = serializers.CharField(required=False, max_length=255, verbose_name="Podcast Theme")
    host = serializers.CharField(max_length=255, verbose_name="Host")
    topics = serializers.CharField(required=False, max_length=255)
    date_published = serializers.DateTimeField(auto_now_add=True, verbose_name="Date Published")
    date_modified = serializers.DateTimeField(auto_now=True, verbose_name="Date Modified")
    class Meta:
        model = Podcasts
        fields = '__all__'

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episodes
        fields = '__all__'
