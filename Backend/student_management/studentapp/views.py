from rest_framework.generics import CreateAPIView,ListAPIView,UpdateAPIView,DestroyAPIView,RetrieveAPIView
from studentapp.models import Student
from studentapp.serializers import StudentSerializer



class CreateStudentView(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer



class ListStudentView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class UpdateStudentView(UpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer    

class DeleteStudentView(DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class RetrieveStudentView(RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer