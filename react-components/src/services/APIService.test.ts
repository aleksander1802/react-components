import { Mock, MockedFunction, vi } from 'vitest';
import { useHttp } from '../hooks/http.hook';
import APIService from './APIService';

vi.mock('../hooks/http.hook');

const mockUseHttp = useHttp as MockedFunction<typeof useHttp>;

const request = vi.fn().mockResolvedValue({
  json: () => ({ id: '1', url: 'https://example.com/image.jpg' }),
  headers: {},
  ok: true,
  redirected: false,
  status: 200,
  statusText: 'OK',
  type: 'basic',
  url: 'https://example.com/',
});

describe('APIService', () => {
  afterEach(() => {
    mockUseHttp.mockReset();
  });

  it('should call getAllPhotos method and return a list of photos', async () => {
    const mockPhotos = { id: '1', url: 'https://example.com/image.jpg' };
    const mockRequest = request;
    mockUseHttp.mockReturnValue({ request: mockRequest });

    const photos = await APIService().getAllPhotos();

    expect(mockRequest).toHaveBeenCalledWith(
      'https://api.unsplash.com/photos?page=1',
      'GET',
      null,
      {
        'Content-Type': 'application/json',
        'Accept-Version': 'v1',
        Authorization: 'Client-ID cqxhz4yPLc38f0dhx5sm4fHoLk1-iDQwK0qiYPdn2Dw',
      }
    );
    expect(photos).toEqual(mockPhotos);
  });

  it('should call searchPhotos method and return a list of photos', async () => {
    const mockPhotos = [{ id: '1', url: 'https://example.com/image.jpg' }];
    const mockRequest = vi.fn(() =>
      Promise.resolve({ json: () => ({ results: mockPhotos }) })
    ) as Mock;
    mockUseHttp.mockReturnValue({ request: mockRequest });

    const photos = await APIService().searchPhotos('test');

    expect(mockRequest).toHaveBeenCalledWith(
      'https://api.unsplash.com/search/photos?page=1&query=test',
      'GET',
      null,
      {
        'Content-Type': 'application/json',
        'Accept-Version': 'v1',
        Authorization: 'Client-ID cqxhz4yPLc38f0dhx5sm4fHoLk1-iDQwK0qiYPdn2Dw',
      }
    );
    expect(photos).toEqual(mockPhotos);
  });

  it('should call getSinglePhoto method and return a single photo', async () => {
    const mockPhoto = { id: '1', url: 'https://example.com/image.jpg' };
    const mockRequest = request;
    mockUseHttp.mockReturnValue({ request: mockRequest });

    const photo = await APIService().getSinglePhoto('1');

    expect(mockRequest).toHaveBeenCalledWith('https://api.unsplash.com/photos/1', 'GET', null, {
      'Content-Type': 'application/json',
      'Accept-Version': 'v1',
      Authorization: 'Client-ID cqxhz4yPLc38f0dhx5sm4fHoLk1-iDQwK0qiYPdn2Dw',
    });
    expect(photo).toEqual(mockPhoto);
  });
});
