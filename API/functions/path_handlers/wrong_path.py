from util.model.api_response import ApiResponse
from util.model.errors import ClientPathError

def wrong_path_handler():
    response = ApiResponse()
    try:
        raise ClientPathError(__name__)
    except ClientPathError as e:
        response.add_error(e)
    
    return response.to_json()



