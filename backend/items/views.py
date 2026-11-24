from django.http import JsonResponse
from .models import Items
from .itemsSerializer import ItemsSerializer

def items_list(request):
    items = Items.objects.all()
    serializer = ItemsSerializer(items, many=True)
    return JsonResponse(serializer.data, safe = False)
