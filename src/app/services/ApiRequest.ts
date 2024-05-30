const API_URL = process.env.API_URL || 'http://localhost:3333';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
}

export const defaultOptions: RequestOptions = {
  page: 1,
  _limit: 10,
};

export function buildQueryString(params: ApiQueryParams) {

  const query = Object.entries(params).filter(
    ([, value]) => value !== undefined
  ).map(([key, value]) => [key, encodeURIComponent(value)]);

  return `?${new URLSearchParams(Object.fromEntries(query)).toString()};`;
}

export async function apiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: RequestOptions = {},
) {
  try {

    const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
    const queryString = buildQueryString({...query, ...mergedOptions});

    const response = await fetch(`${API_URL}/${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return  await response.json();;

  } catch (error) {
    throw error;
  }
}