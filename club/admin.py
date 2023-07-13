from django.contrib import admin
from .models import GalleryImages, GalleryHeadings, Image

class ImageInline(admin.TabularInline):
    model = Image
    extra = 1

class GalleryImagesAdmin(admin.ModelAdmin):
    inlines = [ImageInline]

admin.site.register(GalleryImages, GalleryImagesAdmin)
admin.site.register(GalleryHeadings)
