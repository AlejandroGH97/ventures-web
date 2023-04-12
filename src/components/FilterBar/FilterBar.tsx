import Chip from '@mui/material/Chip';
import styles from '@/styles/FilterBar/FilterBar.module.css';
import { SelectedCategories } from '@/libs/types/venture';

type Props = {
  handleCategoryToggle: (category: string) => void;
  selectedCategories: SelectedCategories;
};

export default function FilterBar({
  handleCategoryToggle,
  selectedCategories,
}: Props) {
  const filterChips = Object.entries(selectedCategories).map(
    ([category, categoryState]: [string, boolean]) => (
      <Chip
        key={category}
        label={category}
        onClick={() => handleCategoryToggle(category)}
        variant={categoryState ? 'filled' : 'outlined'}
        color="primary"
      />
    )
  );

  return (
    <div className={styles.filterBar}>
      <div>{filterChips}</div>
      <div>aaa</div>
    </div>
  );
}
