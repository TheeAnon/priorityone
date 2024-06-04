from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Podcasts, Episodes
from .serializers import PodcastSerializer, EpisodeSerializer

# list all podcasts
@api_view(['GET'])
def get_podcasts(request):
    podcasts = Podcasts.objects.all()
    serializer = PodcastSerializer(podcasts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# get a podcast
@api_view(['GET'])
def get_podcast(request, pk):
    podcast = Podcasts.objects.get(pk=pk)
    serializer = PodcastSerializer(podcast, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


# create a podcast
@api_view(['POST'])
def create_podcast(request):
    serializer = PodcastSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# update a podcast
@api_view(['POST'])
def update_podcast(request, pk):
    podcast = Podcasts.objects.get(pk=pk)
    serializer = PodcastSerializer(instance=podcast, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# delete a podcast
@api_view(['DELETE'])
def delete_podcast(request, pk):
    try:
        podcast = Podcasts.objects.get(pk=pk)
    except Podcasts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    podcast.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# get all episodes
@api_view(['GET'])
def get_episodes(request):
    episodes = Episodes.objects.all()
    serializer = EpisodeSerializer(episodes, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# get an episode
@api_view(['GET'])
def get_episode(request, pk):
    episode = Episodes.objects.get(pk=pk)
    serializer = PodcastSerializer(episode, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


# create an episode
@api_view(['POST'])
def create_episode(request):
    serializer = EpisodeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# update an episode
@api_view(['POST'])
def update_episode(request, pk):
    episode = Episodes.objects.get(pk=pk)
    serializer = PodcastSerializer(instance=episode, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# delete an episode
@api_view(['DELETE'])
def delete_episode(request, pk):
    try:
        episode = Episodes.objects.get(pk=pk)
    except Episodes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    episode.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
