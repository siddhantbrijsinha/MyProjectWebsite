from rest_framework import viewsets
from myapp import models as m
from myapp import serializers as s


class StuffViewSet(viewsets.ModelViewSet):
    queryset = m.Stuff.objects.all()
    serializer_class = s.StuffSerializer