import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Category, CreateCategoryMutation } from '../__generated__/graphql.ts';
import { gql } from '../__generated__/index.ts';
import FormError from './FormError.tsx';

const CREATE_CATEGORY_MUTATION = gql(/* GraphQL */ `
  mutation createCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      ok
      error
      category {
        id
        name
        parentCategoryId
      }
    }
  }
`);

type AddCategoryModalProps = {
  toggleIsOpen: () => void;
  categories: Category[];
  refetch: () => void;
};

type CategoryModalForm = {
  name: string;
  parentCategoryId: number | null;
};

const AddCategoryModal = ({
  toggleIsOpen,
  categories,
  refetch,
}: AddCategoryModalProps) => {
  const { register, getValues, formState, handleSubmit } =
    useForm<CategoryModalForm>();

  const onCompleted = (data: CreateCategoryMutation) => {
    const {
      createCategory: { error, ok },
    } = data;
    if (!ok) {
      toast(error);
    }
    toggleIsOpen();
    refetch();
  };

  const [createCategory] = useMutation(CREATE_CATEGORY_MUTATION, {
    onCompleted,
  });

  const onSubmit = () => {
    const { name, parentCategoryId } = getValues();
    createCategory({
      variables: {
        input: {
          name,
          ...(Number(parentCategoryId) && {
            parentCategoryId: Number(parentCategoryId),
          }),
        },
      },
    });
  };
  return (
    <div className="fixed top-0 left-0 z-10 flex justify-center w-full h-full bg-primary bg-opacity-40 item-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 my-auto bg-gray-blue-700 h-min rounded-xl border-x-2 border-x-slate-900"
      >
        <h3 className="mb-2 text-3xl text-center text-primary">Add Category</h3>

        <label htmlFor="name" className="block text-xl cursor-pointer">
          Name
          <input
            {...register('name', {
              required: 'Username or email is required.',
              maxLength: {
                value: 50,
                message: 'Maximum length is 50 characters.',
              },
              minLength: {
                value: 2,
                message: 'Minimum length is 2 characters.',
              },
            })}
            type="text"
            required
            minLength={2}
            maxLength={50}
            id="name"
            className="mt-1 input"
          />
          {formState.errors.name?.message && (
            <FormError errorMessage={formState.errors.name?.message} />
          )}
        </label>

        <label
          htmlFor="parentCategoryId"
          className="block text-xl cursor-pointer"
        >
          Parent Category
          <select
            {...register('parentCategoryId', {
              required: 'Username or email is required.',
            })}
            required
            id="parentCategoryId"
            className="mt-1 input"
          >
            <option>None</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {formState.errors.name?.message && (
            <FormError errorMessage={formState.errors.name?.message} />
          )}
        </label>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="w-24 px-3 py-2 rounded-md bg-secondary "
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => {
              // Clear
              toggleIsOpen();
            }}
            value=""
            disabled={false}
            className="w-24 px-3 py-2 rounded-md bg-error"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryModal;
