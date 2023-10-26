import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { HiOutlineFolderPlus } from 'react-icons/hi2';
import { SlRefresh } from 'react-icons/sl';
import { TiSortAlphabetically } from 'react-icons/ti';
import { Category } from '../__generated__/graphql.ts';
import { selectedCategoryVar } from '../apollo.ts';
import { ALL_CATEGORIES_QUERY } from '../utils/gqlQueries.ts';
import AddCategoryModal from './AddCategoryModal.tsx';
import CategoryItem from './CategoryItem.tsx';

const CategoriesList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const { data, loading: isLoading, refetch } = useQuery(ALL_CATEGORIES_QUERY);

  if (isLoading || !data) {
    return <h3 className="text-xl">Loading...</h3>;
  }

  const {
    getCategories: { categories },
  } = data;

  return (
    <>
      {isOpen && (
        <AddCategoryModal
          toggleIsOpen={toggleIsOpen}
          categories={categories as Category[]}
          refetch={refetch}
        />
      )}
      <div className="flex justify-end">
        <button
          type="button"
          className="px-3 py-1 text-2xl border-2 border-gray-900 rounded-lg bg-gray-blue-900 "
          onClick={() => selectedCategoryVar(null)}
        >
          <TiSortAlphabetically />
        </button>
        <button
          type="button"
          className="px-3 py-1 text-2xl border-2 border-gray-900 rounded-lg bg-gray-blue-900 "
          onClick={toggleIsOpen}
        >
          <HiOutlineFolderPlus />
        </button>
        <button
          type="button"
          className="px-3 py-1 text-2xl border-2 border-gray-900 rounded-lg bg-gray-blue-900 "
          onClick={() => {
            refetch();
          }}
        >
          <SlRefresh />
        </button>
      </div>
      {categories?.length === 0 ? (
        <h3 className="text-xl">No categories...</h3>
      ) : (
        <ul className="mt-2 text-xl">
          {categories
            ?.filter((category) => category.parentCategoryId === null)
            .map((category) => {
              return (
                <CategoryItem key={category.id} item={category as Category} />
              );
            })}
        </ul>
      )}
    </>
  );
};
export default CategoriesList;
