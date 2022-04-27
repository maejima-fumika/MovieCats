from bs4 import BeautifulSoup
import urllib.request


class ImageUrlAndDescription:
    __imdb_link:str
    __tmdb_link:str

    def __init__(self,imdb_id, tmdb_id) -> None:
        self.__imdb_link = f'https://www.imdb.com/title/tt{imdb_id}/' if imdb_id else ""
        self.__tmdb_link = f"https://www.themoviedb.org/movie/{tmdb_id}" if tmdb_id else ""

    def get_data(self):
        try:
            image_url,description = self.__get_data_from_imdb()
        except:
            try:
                image_url,description = self.__get_data_from_tmdb() 
            except:
                return "Not found","Not found"
        return image_url,description

    def __get_data_from_imdb(self):
        if not self.__imdb_link:
            raise Exception
        response = urllib.request.urlopen(self.__imdb_link)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
        img = soup\
            .find('div', class_='ipc-media ipc-media--poster-27x40 ipc-image-media-ratio--poster-27x40 ipc-media--baseAlt ipc-media--poster-l ipc-poster__poster-image ipc-media__img')\
            .find('img', class_='ipc-image')
        movie_text_span = soup.find('div', class_='sc-16ede01-8 hXeKyz sc-10602b09-11 cNJBaT')\
                            .find('p',class_='sc-16ede01-6 cXGXRR')\
                            .find('span',class_='sc-16ede01-0 fMPjMP')
        description = movie_text_span.text
        return img["src"], description

    def __get_data_from_tmdb(self)->str:
        if not self.__tmdb_link:
            raise Exception
        headers = { "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0" }
        request = urllib.request.Request(url=self.__tmdb_link, headers=headers)
        response = urllib.request.urlopen(request)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
        img = soup.find("div",class_="poster_wrapper")\
                  .find("div",class_="poster")\
                  .find("div",class_="image_content backdrop")\
                  .find("img")
        over_view_p = soup.find("div",class_="overview").find("p")
        return f"https://www.themoviedb.org/{img['src']}", over_view_p.text
