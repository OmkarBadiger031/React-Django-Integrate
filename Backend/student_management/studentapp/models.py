from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=200)
    course = models.TextField(max_length=500)

    def __str__(self):
        return self.name