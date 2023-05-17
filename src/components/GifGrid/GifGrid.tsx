import { useFetchGifs } from '@/hooks';

interface GifGridProps {
  gifCategory: string;
}

export const GifGrid = ({ gifCategory }: GifGridProps) => {
  const { isLoading } = useFetchGifs(gifCategory);

  if (isLoading) return <p>Loading...</p>;

  return <div>{gifCategory}</div>;
};
