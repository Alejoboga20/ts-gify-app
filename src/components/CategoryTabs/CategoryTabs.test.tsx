import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import { CategoryTabs } from './CategoryTabs';

const categories = ['Friends', 'Family', 'Work', 'School', 'Other'];
const onDeleteCategory = vi.fn();

describe('CategoryTabs Tests', () => {
  beforeEach(() => {
    render(<CategoryTabs categories={categories} onDeleteCategory={onDeleteCategory} />);
  });

  afterEach(() => {
    vi.resetAllMocks();
    cleanup();
  });

  it('should render array of categories', () => {
    const tabs = screen.getAllByRole('button');
    expect(tabs).toHaveLength(categories.length);
  });

  it('should call onDeleteCategory when a tab is clicked', async () => {
    const firstTab = screen.getByText(categories[0]);
    fireEvent.click(firstTab);

    expect(onDeleteCategory).toHaveBeenCalledWith(categories[0]);
  });
});
