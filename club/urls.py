from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="home"),
    path('blownCandle', views.blownCandle, name="blownCandle"),
    path('Gallery', views.Gallery, name="Gallery"),
    path('candle', views.candle, name="candle"),
    path('Message',views.Message,name = "Message"),
]