from django.urls import path
from . import views

urlpatterns = [
    path("podcasts/", views.get_podcasts, name='list_podcasts'),
    path('podcast/<int:pk>/', views.get_podcast, name='get_a_podcast'),
    path("create/podcast/", views.create_podcast, name='create_podcast'),
    path('delete/podcast/<int:pk>/', views.delete_podcast, name='delete_podcast'),
    path('update/podcast/<int:pk>/', views.update_podcast, name='update_podcast'),
    path("episodes/", views.get_episodes, name='list_episodes'),
    path('episode/<int:pk>/', views.get_episode, name='get_an_episode'),
    path("create/episode/", views.create_episode, name='create_episode'),
    path('delete/episode/<int:pk>/', views.delete_episode, name='delete_episode'),
    path('update/episode/<int:pk>/', views.update_episode, name='update_episode'),
]
