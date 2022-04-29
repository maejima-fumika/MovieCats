# API
In this time, I used AWS API Gateway and Lambda to create API.
In addition, to create them from local machine, I used AWS SAM.

File structure：
```bash
|- events/ # Mock api event used in integration test.
|- functions/ # Code for Lambda function.
|- env_local.json # Mock environment variables used in integration test.
|- template.yaml # Setting file for SAM.
```

To write the API setting, I used Swagger.
Document: https://app.swaggerhub.com/apis/maejima-fumika/movie-cats_ap_iv_1/1.0-oas3#/