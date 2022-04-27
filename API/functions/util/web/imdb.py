from bs4 import BeautifulSoup
from urllib import request

def get_image_url(imdb_id:str)->str:
    try:
        url = f'https://www.imdb.com/title/tt{imdb_id}/'
        response = request.urlopen(url)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
        movie_image_img = soup.find('div', class_='ipc-media ipc-media--poster-27x40 ipc-image-media-ratio--poster-27x40 ipc-media--baseAlt ipc-media--poster-l ipc-poster__poster-image ipc-media__img').find('img', class_='ipc-image')
    except:
        return ''
    return movie_image_img.get('src', '')

def get_video_url(imdb_id:str)->str:
    try:
        url = f'https://www.imdb.com/title/tt{imdb_id}/'
        response = request.urlopen(url)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
        movie_video_a = soup.find('a', class_='ipc-lockup-overlay sc-5ea2f380-2 gdvnDB hero-media__slate-overlay ipc-focusable')
    except:
        return ''
    href = movie_video_a.get('href', '')
    return 'https://www.imdb.com'+href if href else ''

def get_description(imdb_id:str)->str:
    try:
        url = f'https://www.imdb.com/title/tt{imdb_id}/'
        response = request.urlopen(url)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
        movie_text_span = soup.find('div', class_='sc-16ede01-8 hXeKyz sc-10602b09-11 cNJBaT')\
                            .find('p',class_='sc-16ede01-6 cXGXRR')\
                            .find('span',class_='sc-16ede01-0 fMPjMP')
        description = movie_text_span.text
    except:
        return ''
    return description
