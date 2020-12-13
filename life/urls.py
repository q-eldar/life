from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import WorldViewSet

router = routers.DefaultRouter()
router.register('worlds', WorldViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
