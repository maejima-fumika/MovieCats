from tracemalloc import start
import boto3
import os
from botocore.exceptions import ClientError
from util.model.errors import TableError
from boto3.dynamodb.conditions import Key
import decimal

class MoviesToCategoriesTable:
    __table:any
    __partitionkey_name = "categoryId"
    __sortkey_name = "movieId"
    __gsi_name = "movieIdGsi"
    __gsi_primarykey_name = "movieId"
    __lsi_name = "averageRatingOfMovieLsi"
    __lsi_partitionkey_name = "categoryId"
    __lsi_sortkey_name = "averageRatingOfMovie"

    def __init__(self) -> None:
        table_name:str = os.environ.get("MOVIES_TO_CATEGORIES_TABLE")
        endpoint_url = os.environ.get("DYNAMODB_ENDPOINT")
        if endpoint_url:
            dynamodb = boto3.resource('dynamodb', endpoint_url=endpoint_url)
        else:
            dynamodb = boto3.resource('dynamodb')
        self.__table = dynamodb.Table(table_name)

    def query_movies_of_category_based_on_average_ratings(self,category_id:str,limit=10)->list:
        try:
            response = self.__table.query(
                IndexName=self.__lsi_name,
                ProjectionExpression="categoryId, movieId, averageRatingOfMovie",
                KeyConditionExpression=Key(self.__lsi_partitionkey_name).eq(category_id),
                ScanIndexForward=False,
                Limit=limit
            )
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response["Items"]

    def query_categories_of_movie(self, movie_id:str)->list:
        try:
            response = self.__table.query(
                IndexName=self.__gsi_name,
                ProjectionExpression="categoryId, movieId",
                KeyConditionExpression=Key(self.__gsi_primarykey_name).eq(movie_id),
                ScanIndexForward=False,
            )
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response["Items"]

