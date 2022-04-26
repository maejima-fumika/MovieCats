from logging import getLogger

class TableError(Exception):
    def __init__(self, name:str, code:str, message:str) -> None:
        logger = getLogger(name)
        logger.warning("An error occured when handling a dynamodb table.")
        logger.warning(f"code : {code}")
        logger.warning(f"message : {message}")

class TableItemError(Exception):
    def __init__(self, name:str, message:str) -> None:
        logger = getLogger(name)
        logger.warning("There is a defect in the table items.")
        logger.warning(message)


class CodeError(Exception):
    def __init__(self, name:str, message:str) -> None:
        logger = getLogger(name)
        logger.warning("There is a wrong point in code.")
        logger.warning(message)

class ClientRequestError(Exception):
    def __init__(self,name:str, message:str) -> None:
        logger = getLogger(name)
        logger.warning("There is a wrong point with client request.")
        logger.warning(message)
        
class ClientPathError(Exception):
    def __init__(self,name:str) -> None:
        logger = getLogger(name)
        logger.warning("A client requested a wrong path.")
