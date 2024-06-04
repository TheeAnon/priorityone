from rest_framework import serializers
from .models import Podcasts, Episodes

class PodcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Podcasts
        fields = '__all__'

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episodes
        fields = '__all__'
