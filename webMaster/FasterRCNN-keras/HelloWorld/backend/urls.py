from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from django.conf.urls import url

urlpatterns = [
    url(r'^test$', views.snippet_list),
    url(r'^picture$', views.uploads_files),
    url(r'^get_picture$', views.return_picture),
]