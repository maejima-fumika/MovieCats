import boto3
import os
from botocore.exceptions import ClientError
from util.model.errors import TableError

class CategoriesTable:
    __table:any
    __primarykey_name = "categoryId"

    def __init__(self) -> None:
        table_name:str = os.environ.get("CATEGORIES_TABLE")
        endpoint_url = os.environ.get("DYNAMODB_ENDPOINT")
        if endpoint_url:
            dynamodb = boto3.resource('dynamodb', endpoint_url=endpoint_url)
        else:
            dynamodb = boto3.resource('dynamodb')
        self.__table = dynamodb.Table(table_name)

    def scan_categories(self)->list:
        try:
            scan_kwargs = {
                'ProjectionExpression': "categoryId, categoryName, numOfMovies, imageUrl",
            }
            done = False
            start_key = None
            response_items = []
            while not done:
                if start_key:
                    scan_kwargs['ExclusiveStartKey'] = start_key
                response = self.__table.scan(**scan_kwargs)
                response_items += response.get('Items', [])
                start_key = response.get('LastEvaluatedKey', None)
                done = start_key is None
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response_items

