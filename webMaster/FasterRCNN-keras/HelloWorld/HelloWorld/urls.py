from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter


from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')), # demo add


]