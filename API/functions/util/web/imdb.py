from bs4 import BeautifulSoup
from urllib import request

def get_image_url(imdb_link:str)->str:
    try:
        url = f'https://www.imdb.com/title/tt{imdb_link}/'
        response = request.urlopen(url)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
    except:
        return ''
    movie_image_img = soup.find('div', class_='ipc-media ipc-media--poster-27x40 ipc-image-media-ratio--poster-27x40 ipc-media--baseAlt ipc-media--poster-l ipc-poster__poster-image ipc-media__img').find('img', class_='ipc-image')
    return movie_image_img.get('src', '')

def get_video_url(imdb_link:str)->str:
    try:
        url = f'https://www.imdb.com/title/tt{imdb_link}/'
        response = request.urlopen(url)
        soup = BeautifulSoup(response,features="lxml")
        response.close()
    except:
        return ''
    movie_video_a = soup.find('a', class_='ipc-lockup-overlay sc-5ea2f380-2 gdvnDB hero-media__slate-overlay ipc-focusable')
    href = movie_video_a.get('href', '')
    return 'https://www.imdb.com'+href if href else ''
