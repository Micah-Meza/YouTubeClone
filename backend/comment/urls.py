from django.urls import path,include
from . import views


urlpatterns = [
    path('', views.get_all_videos),
    path('<str:video_id>/', views.get_all_comments),
    path('comments/<str:videoId>/', views.posted_comments),
]


