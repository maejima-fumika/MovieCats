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

