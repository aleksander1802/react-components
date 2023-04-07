export type IHeaders = {
  'Content-Type': string;
  'Accept-Version'?: string;
  Authorization?: string;
};

export const useHttp = () => {
  const request = async (
    url: string,
    method = 'GET',
    body: null | string = null,
    headers: IHeaders = {
      'Content-Type': 'application/json',
    }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      return response;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
