"""
URL configuration for student_management project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from studentapp.views import CreateStudentView, DeleteStudentView, ListStudentView, RetrieveStudentView, UpdateStudentView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/students/create/',CreateStudentView.as_view()),
    path('api/students/list/',ListStudentView.as_view()),
    path('api/students/update/<int:pk>/',UpdateStudentView.as_view()),
    path('api/students/delete/<int:pk>/',DeleteStudentView.as_view()),
    path('api/students/retrieve/<int:pk>/',RetrieveStudentView.as_view())
]
