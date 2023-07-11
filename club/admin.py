from django.contrib import admin
from .models import Sponsers, EventsList, GalleryImages, GalleryHeadings, TeamMembers, TeamHeadings
import datetime
# Register your models here.

admin.site.register(Sponsers)
admin.site.register(EventsList)
admin.site.register(GalleryImages)
admin.site.register(GalleryHeadings)
admin.site.register(TeamMembers)
admin.site.register(TeamHeadings)