from util.model.api_response import ApiResponse
from util.dao.categories_table import CategoriesTable
from util.model.encoders import DecimalToIntEncoder

def list_categories_handler():
    response = ApiResponse()
    try:
        categories_table = CategoriesTable()
        categories = categories_table.scan_categories()
        response_body = {
            "categories":categories
        }
        response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json(DecimalToIntEncoder)



