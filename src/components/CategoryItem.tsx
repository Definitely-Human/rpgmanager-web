/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery, useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import { BsFolder2, BsPencil } from 'react-icons/bs';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { Category } from '../__generated__/graphql.ts';
import { selectedCategoryVar } from '../apollo.ts';
import { ALL_CATEGORIES_QUERY } from '../utils/gqlQueries.ts';

type CategoryItemProps = {
  item: Category;
};

const CategoryItem = ({ item }: CategoryItemProps) => {
  const { name, id } = item;
  const { data } = useQuery(ALL_CATEGORIES_QUERY);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const selectedCategory = useReactiveVar(selectedCategoryVar);

  useEffect(() => {
    if (data) {
      const newSubcategories = data?.getCategories?.categories?.filter(
        (category) => {
          return category.parentCategoryId === id;
        }
      );
      setSubCategories(newSubcategories as Category[]);
    }
  }, [data, id]);

  if (!data) return null;

  return (
    <li className="capitalize font-normal  grid  grid-rows-[40px_1fr]">
      <div
        role="button"
        tabIndex={0}
        onClick={() => selectedCategoryVar(item)}
        className={`grid grid-cols-[30px_1fr_30px_30px] border-b-2 hover:bg-gray-blue-700
                 border-gray-blue-900 group cursor-pointer p-1 items-center ${
                   id === selectedCategory?.id && 'text-primary'
                 }`}
      >
        <BsFolder2 />
        <span className="overflow-x-hidden whitespace-nowrap">{name}</span>
        <div className="hidden text-gray-200 group-hover:block hover:text-primary">
          <BsPencil />
        </div>
        <div className="hidden text-gray-200 group-hover:block hover:text-error">
          <RiDeleteBin7Line />
        </div>
      </div>
      {subCategories.length !== 0 && (
        <div className="pl-5 ">
          <ul>
            {subCategories.map((category) => {
              return <CategoryItem key={category.id} item={category} />;
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
