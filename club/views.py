from django.shortcuts import render
from .models import Sponsers, EventsList, GalleryImages, GalleryHeadings, TeamMembers, TeamHeadings
import datetime
# Create your views here.

def  home(request):
    sponsers = Sponsers.objects.all()
    eventslist = EventsList.objects.all()
    context = {'sponsers': sponsers, 'eventslist':eventslist}
    return render(request,'club/home.html', context)


def blownCandle(request):
    eventslist = EventsList.objects.all()
    context = {'eventslist':eventslist}
    return render(request,'club/blownCandle.html', context)


def Gallery(request):
    galleryimages = GalleryImages.objects.all().order_by('-EventDate')
    galleryheadings = GalleryHeadings.objects.all().order_by('-EventDate')
    context = {'galleryimages':galleryimages,'galleryheadings':galleryheadings}
    return render(request,'club/Gallery.html', context)

def Message(request):
    return render(request,'club/Message.html')

def  candle(request):
    teammembers = TeamMembers.objects.all()
    teamheadings = TeamHeadings.objects.all()
    context = {'teammembers': teammembers, 'teamheadings':teamheadings}
    return render(request,'club/candle.html', context)

