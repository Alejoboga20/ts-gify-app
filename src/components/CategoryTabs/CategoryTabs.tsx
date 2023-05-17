interface CategoryTabsProps {
  categories: string[];
  onDeleteCategory: (category: string) => void;
}

export const CategoryTabs = ({ categories, onDeleteCategory }: CategoryTabsProps) => {
  return (
    <div className='mb-2'>
      {categories.map((category) => (
        <button
          key={category}
          className='mx-1 my-2 rounded-xl bg-neutral-300 px-4 py-1 hover:bg-neutral-400'
          onClick={() => onDeleteCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
