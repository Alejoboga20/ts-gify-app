interface GifGridProps {
  gifCategory: string;
}

export const GifGrid = ({ gifCategory }: GifGridProps) => {
  return <div>{gifCategory}</div>;
};
