from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "index.html")


def calcimc(request):
    return render(request, "calcimc.html")
