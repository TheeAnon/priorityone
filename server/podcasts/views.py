from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Podcasts, Episodes
from .serializers import PodcastSerializer, EpisodeSerializer

@api_view(['GET'])
def get_podcasts(request):
    podcasts = Podcasts.objects.all()
    serializer = PodcastSerializer(podcasts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def create_podcast(request):
    serializer = PodcastSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_podcast(pk):
    try:
        podcast = Podcasts.objects.get(pk=pk)
    except Podcasts.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    podcast.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
def delete_episode(pk):
    try:
        episode = Episodes.objects.get(pk=pk)
    except Episodes.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    episode.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
