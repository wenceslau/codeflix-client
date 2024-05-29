import { opt } from 'ts-interface-checker';

const API_URL = process.env.API_URL || 'http://localhost:3333';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  limit?: number;
}

export const defaultOptions: RequestOptions = {
  page: 1,
  limit: 10,
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
    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
}