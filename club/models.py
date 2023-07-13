from django.db import models
import datetime

class GalleryImages(models.Model):
    EventName = models.TextField(max_length=200, default='all')
    EventDate = models.DateTimeField(default=datetime.datetime.today())


class Image(models.Model):
    gallery = models.ForeignKey(GalleryImages, on_delete=models.CASCADE)
    Image = models.ImageField(upload_to='static/images')


class GalleryHeadings(models.Model):
    heading = models.TextField(max_length=200)
    EventDate = models.DateTimeField(default=datetime.datetime.today())
