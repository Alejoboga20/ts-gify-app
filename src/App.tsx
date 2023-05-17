import { useState } from 'react';

import { CategoryTabs, GifGrid, SearchBar } from '@/components';
import { BaseLayout } from '@/layout';

export const App = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddNewCategory = (category: string) => {
    if (categories.includes(category)) return;

    setCategories((prevCat) => [category, ...prevCat]);
  };

  const onDeleteCategory = (category: string) => {
    const newCategories = categories.filter((cat) => cat !== category);
    setCategories(newCategories);
  };

  return (
    <BaseLayout>
      <SearchBar onAddNewCategory={onAddNewCategory} />
      <CategoryTabs categories={categories} onDeleteCategory={onDeleteCategory} />
      {categories.map((category) => (
        <GifGrid key={category} gifCategory={category} />
      ))}
    </BaseLayout>
  );
};
