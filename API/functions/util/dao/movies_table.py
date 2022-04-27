import boto3
import os
from botocore.exceptions import ClientError
from util.model.errors import TableError

class MoviesTable:
    __table:any
    __primarykey_name = "movieId"

    def __init__(self) -> None:
        table_name:str = os.environ.get("MOVIES_TABLE")
        endpoint_url = os.environ.get("DYNAMODB_ENDPOINT")
        if endpoint_url:
            dynamodb = boto3.resource('dynamodb', endpoint_url=endpoint_url)
        else:
            dynamodb = boto3.resource('dynamodb')
        self.__table = dynamodb.Table(table_name)

    def get_movie_by_movie_id(self, movie_id:str):
        try:
            response = self.__table.get_item(Key={
                self.__primarykey_name:movie_id
            })
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response.get('Item',{})

    def add_image_url_to_movie(self, movie_id:str, image_url:str="Not exists"):
        try:
            response = self.__table.update_item(
            Key={
                self.__primarykey_name: movie_id,
            },
            UpdateExpression="set imageUrl=:image_url",
            ExpressionAttributeValues={':image_url': image_url},
            ReturnValues="UPDATED_NEW"
        )
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response
    
    def add_description_to_movie(self, movie_id:str, description:str="Not exists"):
        try:
            response = self.__table.update_item(
            Key={
                self.__primarykey_name: movie_id,
            },
            UpdateExpression="set description=:description",
            ExpressionAttributeValues={':description': description},
            ReturnValues="UPDATED_NEW"
        )
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response
    
    def add_nearest_movie_ids_to_movie(self, movie_id:str, nearest_movie_ids:str):
        try:
            response = self.__table.update_item(
            Key={
                self.__primarykey_name: movie_id,
            },
            UpdateExpression="set nearestMovieIds=:nearest_movie_ids",
            ExpressionAttributeValues={':nearest_movie_ids': nearest_movie_ids},
            ReturnValues="UPDATED_NEW"
        )
        except ClientError as e:
            raise TableError(__name__, e.response['Error']['Code'], e.response["Error"]["Message"])
        else:
            return response

    
