from django.urls import path
from . import views

urlpatterns = [
    path("podcasts/", views.get_podcasts, name='list_podcasts'),
    path("create/podcast/", views.create_podcast, name='create_podcast'),
    path('delete/podcast/<int:pk>/', views.delete_podcast, name='delete_podcast'),
]
