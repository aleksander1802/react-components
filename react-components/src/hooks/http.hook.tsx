export const useHttp = () => {
  const request = async (
    url: string,
    method = 'GET',
    body: null | string = null,
    headers: { 'Content-Type': string; 'Accept-Version': string; Authorization: string } = {
      'Content-Type': 'application/json',
      'Accept-Version': 'v1',
      Authorization: 'Client-ID cqxhz4yPLc38f0dhx5sm4fHoLk1-iDQwK0qiYPdn2Dw',
    }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
