import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '.';

const gifCategory = 'friends';
const LIMIT = 6;

describe('useFetchGifs', () => {
  it('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs(gifCategory));
    const { gifs, error, isLoading, isValidating } = result.current;

    expect(gifs).toBeUndefined();
    expect(error).toBeUndefined();
    expect(isLoading).toBeTruthy();
    expect(isValidating).toBeTruthy();
  });

  it('should return the gifs', async () => {
    const { result } = renderHook(() => useFetchGifs(gifCategory));

    await waitFor(() => expect(result.current.gifs?.data.length).toBe(LIMIT));
  });
});
