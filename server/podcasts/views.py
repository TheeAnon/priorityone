from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Podcasts, Episodes
from .serializers import PodcastSerializer, EpisodeSerializer

# List all podcasts
@api_view(['GET'])
def get_podcasts(request):
    podcasts = Podcasts.objects.all()
    serializer = PodcastSerializer(podcasts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Get a podcast
@api_view(['GET'])
def get_podcast(request, pk):
    try:
        podcast = Podcasts.objects.get(pk=pk)
    except Podcasts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = PodcastSerializer(podcast, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Create a podcast
@api_view(['POST'])
def create_podcast(request):
    serializer = PodcastSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Update a podcast
@api_view(['PATCH'])
def update_podcast(request, pk):
    try:
        podcast = Podcasts.objects.get(pk=pk)
    except Podcasts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = PodcastSerializer(instance=podcast, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a podcast
@api_view(['DELETE'])
def delete_podcast(request, pk):
    try:
        podcast = Podcasts.objects.get(pk=pk)
    except Podcasts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    podcast.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

# Get all episodes
@api_view(['GET'])
def get_episodes(request):
    episodes = Episodes.objects.all()
    serializer = EpisodeSerializer(episodes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Get an episode
@api_view(['GET'])
def get_episode(request, pk):
    try:
        episode = Episodes.objects.get(pk=pk)
    except Episodes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = EpisodeSerializer(episode, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Create an episode
@api_view(['POST'])
def create_episode(request):
    serializer = EpisodeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Update an episode
@api_view(['PATCH'])
def update_episode(request, pk):
    try:
        episode = Episodes.objects.get(pk=pk)
    except Episodes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = EpisodeSerializer(instance=episode, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete an episode
@api_view(['DELETE'])
def delete_episode(request, pk):
    try:
        episode = Episodes.objects.get(pk=pk)
    except Episodes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    episode.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
