import { opt } from 'ts-interface-checker';

const API_URL = "https://localhost:3333";

export interface ApiQueryParams{
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  limit?: number;
}

export const defaultRequestOptions: RequestOptions = {
  page: 1,
  limit: 10,
}

export async function apiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: RequestOptions = {}
){
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  }catch(error){
    console.log(error);
  }
}