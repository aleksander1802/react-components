import { useHttp } from '../hooks/http.hook';
import { ICards, ISearchResults } from '../components/Cards/Cards.props';

const APIService = () => {
  const { request } = useHttp();

  const _apiBase = 'https://api.unsplash.com/';

  const getAllPhotos = async () => {
    const res = (await request(`${_apiBase}photos?page=1`)) as ICards[];

    return res;
  };

  const searchPhotos = async (query: string) => {
    const res: ISearchResults = await request(`${_apiBase}search/photos?page=1&query=${query}`);

    return res.results;
  };

  const getSinglePhoto = async (id: string) => {
    const res = await request(`${_apiBase}photos/${id}`);

    return res;
  };

  return { getAllPhotos, searchPhotos, getSinglePhoto };
};

export default APIService;
