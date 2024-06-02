from django.shortcuts import render
from rest_framework import viewsets
from .models import Podcast, Episode
from .serializers import PodcastSerializer, EpisodeSerializer

class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer

class EpisodeViewSet(viewsets.ModelViewSet):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer
