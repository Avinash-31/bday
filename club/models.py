from django.db import models
import datetime
# Create your models here.

class Sponsers(models.Model):
  Image=models.ImageField(upload_to='static/icons')
  Link = models.CharField(max_length=5000,blank=True,default="no link")


class EventsList(models.Model):
  Image = models.ImageField(upload_to='static/EventsGallery')
  Title = models.TextField(max_length=200)
  StartDate = models.DateTimeField(default=datetime.datetime.today())
  EndDate = models.DateTimeField(default=datetime.datetime.today())
  Location = models.TextField(max_length=200,blank=True)
  Description = models.CharField(max_length=5000,blank=True)
  def __str__(self):
         return self.Title


class GalleryImages(models.Model):
  Image=models.ImageField(upload_to='static/images')
  EventName = models.TextField(max_length=200,default='all')
  EventDate = models.DateTimeField(default=datetime.datetime.today())
  
class GalleryHeadings(models.Model):
  heading = models.TextField(max_length=200)
  EventDate = models.DateTimeField(default=datetime.datetime.today())


class TeamMembers(models.Model):
    Image = models.ImageField(upload_to='static/images')
    Name = models.TextField(max_length=200)
    Position_and_Year_of_study = models.TextField(max_length=50)
    Twitter = models.CharField(max_length=5000, blank=True, default="no link")
    Instagram = models.CharField(max_length=5000, blank=True, default="no link")
    Linkedin = models.CharField(max_length=5000, blank=True, default="no link")
    Year = models.TextField(max_length=50)

    def __str__(self):
        return self.Name

class TeamHeadings(models.Model):
    heading = models.TextField(max_length=200)

    def __str__(self):
        return self.heading


