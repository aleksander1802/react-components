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

  // const getAllComics = async (offset = 0) => {
  //   const res = await request(
  //     `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
  //   );
  //   return res.data.results.map(_transformComics);
  // };

  // const getComics = async (id) => {
  //   const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
  //   return _transformComics(res.data.results[0]);
  // };

  // const _transformCharacter = (char) => {
  //   return {
  //     id: char.id,
  //     name: char.name,
  //     description: char.description
  //       ? `${char.description.slice(0, 210)}...`
  //       : 'There is no description for this character',
  //     thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
  //     homepage: char.urls[0].url,
  //     wiki: char.urls[1].url,
  //     comics: char.comics.items,
  //   };
  // };

  // const _transformComics = (comics) => {
  //   return {
  //     id: comics.id,
  //     title: comics.title,
  //     description: comics.description || 'There is no description',
  //     pageCount: comics.pageCount
  //       ? `${comics.pageCount} p.`
  //       : 'No information about the number of pages',
  //     thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
  //     language: comics.textObjects.language || 'en-us',
  //     price: comics.prices.price ? `${comics.prices.price}$` : 'not available',
  //   };
  // };

  return { getAllPhotos, searchPhotos, getSinglePhoto };
};

export default APIService;
