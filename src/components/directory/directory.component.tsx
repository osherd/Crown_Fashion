import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';
import { DirectoryProps } from '../../interfaces/Category';
import { Category } from '../../types/category';

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className='directory-container'>
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
