from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_podcasts, name='list_podcasts'),
    path('/<int:pk>/', views.get_podcast, name='get_a_podcast'),
    path("create/", views.create_podcast, name='create_podcast'),
    path('delete/<int:pk>/', views.delete_podcast, name='delete_podcast'),
    path('update/<int:pk>/', views.update_podcast, name='update_podcast'),
    path("episodes/all/", views.get_episodes, name='list_episodes'),
    path("episodes/<int:pk>/", views.get_episodes, name='list_episodes_of_podcast'),
    path('episode/<int:pk>/', views.get_episode, name='get_an_episode'),
    path("episode/create/", views.create_episode, name='create_episode'),
    path('episode/delete/<int:pk>/', views.delete_episode, name='delete_episode'),
    path('episode/update/<int:pk>/', views.update_episode, name='update_episode'),
]
