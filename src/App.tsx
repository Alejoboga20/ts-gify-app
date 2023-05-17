import { useState } from 'react';

import { GifGrid, SearchBar } from '@/components';
import { BaseLayout } from '@/layout';

export const App = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddNewCategory = (category: string) => {
    if (categories.includes(category)) return;

    setCategories((prevCat) => [category, ...prevCat]);
  };

  return (
    <BaseLayout>
      <SearchBar onAddNewCategory={onAddNewCategory} />
      {categories.map((category) => (
        <GifGrid key={category} gifCategory={category} />
      ))}
    </BaseLayout>
  );
};
