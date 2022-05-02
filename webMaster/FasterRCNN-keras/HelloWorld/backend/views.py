import os
from .glayout import getLayout
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect
import json
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
        return JsonResponse({"errcode": 0})


def return_picture(request):
    snippets = Image.objects.all()
    serializer = ImageSerializer
    BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent
    path = os.path.join(BASE_DIR, 'frontend')
    path = os.path.join(path, 'static')
    path = os.path.join(path, 'assets')
    file_path = os.path.join(path, 'test.jpg')
    pic = open(file_path, 'rb')
    return HttpResponse(pic.read(), content_type='image/jpg')

def getGode(request):
    if request.method == 'POST':
        strs = request.body
        strs = strs.decode()
        dict = json.loads(strs)
        BASE_DIR = Path(__file__).resolve().parent
        # fo = open('./preview.txt', 'r+')
        # fo.write(dict['xml'])
        code, style, images = getLayout(dict['path'], dict['xml'], dict['page_id'])
        return JsonResponse({"message": 'success', 'code': code, 'style': style, 'images': images})


def return_assets(request):
    strs = request.body
    strs = strs.decode()
    dict = json.loads(strs)
    snippets = Image.objects.all()
    serializer = ImageSerializer
    file_path = os.path.join('..\\..\\frontend\\static\\assets', dict['filename'])
    pic = open(file_path+'.png', 'rb')
    return HttpResponse(pic.read(), content_type='image/jpg')


def uploads_files(request):
    if request.method == 'POST':
        info = []
        BASE_DIR = Path(__file__).resolve().parent.parent.parent.parent
        path = os.path.join(BASE_DIR, 'frontend')
        path = os.path.join(path, 'static')
        path = os.path.join(path, 'assets')
        path = os.path.join(path, 'inputimage')
        pyPath = Path(__file__).resolve().parent.parent.parent
        files = request.FILES.getlist('file')
        for f in files:
            file = Image(image=f)
            file.save()
            path = os.path.join(path, f.name)
            os.system('cd {0} && python test_frcnn.py -p {1}'.format(pyPath, path))
            output = open(os.path.join(pyPath, 'preview.txt'), 'r')
            info.append({'name': f.name, 'xml': output.read()})
        return JsonResponse({"message": 'success', 'info': info})
    else:
        return
