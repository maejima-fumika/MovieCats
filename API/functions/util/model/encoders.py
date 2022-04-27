from decimal import Decimal
import json


class DecimalToIntEncoder(json.JSONEncoder):
    def default(self, obj):
       if isinstance(obj, Decimal):
           return int(obj)
       return json.JSONEncoder.default(self, obj)

class DecimalToFloatEncoder(json.JSONEncoder):
    def default(self, obj):
       if isinstance(obj, Decimal):
           return float(obj)
       return json.JSONEncoder.default(self, obj)
