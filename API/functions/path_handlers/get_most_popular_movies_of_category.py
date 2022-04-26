from util.model.api_response import ApiResponse

def get_most_popular_movies_of_category_handler(event_body):
    response = ApiResponse()
    try:
        pass
        # 実際の処理
        # response.add_body(response_body)
    except Exception as e:
        response.add_error(e)
    
    return response.to_json()



