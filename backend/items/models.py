from django.db import models

class Items(models.Model):
    name = models.CharField(max_length = 100)
    brand = models.CharField(max_length = 100)
    condition = models.CharField(max_length = 10, default="New")
    price = models.DecimalField(max_digits = 10, decimal_places = 2)
    quantity = models.IntegerField()
    image = models.ImageField(upload_to="products/", blank=True, null=True)

    def __str__(self):
        return f"{self.condition}-{self.brand}-{self.name} -${self.price} -Qty{self.quantity}"