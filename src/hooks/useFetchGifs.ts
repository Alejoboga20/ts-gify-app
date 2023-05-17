import useSWR from 'swr';

import { GifsResponse } from '@/types';

export const useFetchGifs = (gifCategory: string) => {
  const { data, isLoading, error, isValidating } = useSWR<GifsResponse>(`${gifCategory}&limit=6`);

  return {
    gifs: data,
    isLoading,
    error,
    isValidating,
  };
};
