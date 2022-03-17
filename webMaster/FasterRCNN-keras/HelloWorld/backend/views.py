import os

from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse
from pathlib import Path

from .models import Image
from .serializer import ImageSerializer


def snippet_list(request):
    """
    列出所有的snippets，或者创建一个新的snippet。
    """
    if request.method == 'GET':
        snippets = Image.objects.all()
        serializer = ImageSerializer
        return JsonResponse({"errcode":0})


def return_picture(request):
    snippets = Image.objects.all()
    serializer = ImageSerializer
    BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent
    path = os.path.join(BASE_DIR, 'frontend')
    path = os.path.join(BASE_DIR, 'static')
    path = os.path.join(path, 'assets')
    for file in os.listdir(path):
        file_path = os.path.join(path, file)

        pic = open(file_path, 'rb')
    return HttpResponse(pic.read(), content_type='image/jpg')

def uploads_files(request):
    if request.method == 'POST':
        files = request.FILES.getlist('file')
        for f in files:
            file = Image(image=f)
            file.save()
        return JsonResponse({"message":'success'})
    else:
        return
