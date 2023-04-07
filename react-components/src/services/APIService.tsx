import { useHttp } from '../hooks/http.hook';
import { ICards, ISearchResults } from '../components/Cards/Cards.props';
import { ICard } from '../components/Card/Card.props';

const APIService = () => {
  const { request } = useHttp();
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Version': 'v1',
    Authorization: 'Client-ID cqxhz4yPLc38f0dhx5sm4fHoLk1-iDQwK0qiYPdn2Dw',
  };

  const _apiBase = 'https://api.unsplash.com/';

  const getAllPhotos = async () => {
    const req = await request(`${_apiBase}photos?page=1`, 'GET', null, headers);
    const res: ICards[] = await req.json();

    return res;
  };

  const searchPhotos = async (query: string) => {
    const req = await request(
      `${_apiBase}search/photos?page=1&query=${query}`,
      'GET',
      null,
      headers
    );
    const res: ISearchResults = await req.json();

    return res.results;
  };

  const getSinglePhoto = async (id: string) => {
    const req = await request(`${_apiBase}photos/${id}`, 'GET', null, headers);
    const res: ICard = await req.json();

    return res;
  };

  return { getAllPhotos, searchPhotos, getSinglePhoto };
};

export default APIService;
