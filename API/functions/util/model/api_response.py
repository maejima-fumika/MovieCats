import json
import numbers


class ApiResponse:
    __status_code:numbers = 500
    __body:dict = {"error_message":"Server error: Something wrong happend."}

    def add_body(self, body:dict) -> None:
        self.__status_code = 200
        self.__body = body

    def add_error(self, error:Exception) -> None:
        if type(error).__name__ == "ClientRequestError":
            self.__status_code = 406
            self.__body = {
                "error_message":"Client error: There is something wrong with the content of the request."
            }
        elif type(error).__name__ == "ClientPathError":
            self.__status_code = 404
            self.__body = {
                "error_message":"Client error: You accessed to a wrong path."
            }
        else:
            self.__status_code = 500
            self.__body = {
                "error_message":"Server error: Something wrong happend."
            }

    def to_json(self,encoder=None) -> json:
        return {
            "statusCode":self.__status_code,
            "body":json.dumps(self.__body, ensure_ascii=False,cls=encoder),
        }
    
