import boto3
import csv
import io
import os


class MLResultBucket:
    __bucket:any

    def __init__(self):
        s3 = boto3.resource('s3')
        bucket_name:str = os.environ.get("ML_RESULT_BUCKET")
        self.__bucket = s3.Bucket(bucket_name)

    def __get_file_data(self, file_name):
        s3obj = self.bucket.Object(file_name).get()
        return io.TextIOWrapper(io.BytesIO(s3obj['Body'].read()))

    # def get_yjcodes(self):
    #     file_names = self.__get_filenames()
    #     yjcodes = []
    #     for file_name in file_names:
    #         reader = csv.reader(self.__get_s3file(file_name))
    #         for r in reader:
    #             yjcodes.append(r[1])
    #     return yjcodes
