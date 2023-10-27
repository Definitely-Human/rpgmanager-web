import { useQuery, useReactiveVar } from '@apollo/client';
import { Task } from '../__generated__/graphql.ts';
import { selectedCategoryVar } from '../apollo.ts';
import { ALL_TASKS_BY_CATEGORY } from '../utils/gqlQueries.ts';
import ResultsListItem from './ResultsListItem.tsx';

const ResultsList = () => {
  const selectedCategory = useReactiveVar(selectedCategoryVar);
  const { data, loading: isLoading } = useQuery(ALL_TASKS_BY_CATEGORY, {
    variables: { input: { categoryId: selectedCategory?.id } },
  });

  if (isLoading || !data) {
    return <h3 className="text-3xl text-center">Loading...</h3>;
  }

  const {
    getTasks: { tasks },
  } = data;

  return (
    <div>
      <h2 className="mb-3 text-4xl text-center">Results</h2>
      <table className="w-full text-xl border-2 border-gray-900 table-fixed">
        <thead className="text-primary">
          <tr>
            <th className="w-1/5 p-2 overflow-x-hidden border-r-4 border-primary">
              Name
            </th>
            <th className="w-1/5 p-2 overflow-x-hidden border-r-4 border-primary">
              Due To
            </th>
            <th className="overflow-x-hidden p-2 w-[15%]  border-r-4 border-primary">
              Complete
            </th>
            <th className="overflow-x-hidden p-2 w-[15%]  border-r-4 border-primary">
              Favorite
            </th>
            <th className="hidden p-2 lg:block">Tags</th>
          </tr>
        </thead>
        <tbody className="font-normal text-center">
          {tasks?.map((task) => {
            return <ResultsListItem key={task.id} item={task as Task} />;
          })}
        </tbody>
      </table>
      <button
        type="button"
        className="px-10 py-2 mt-3 border-4 rounded-md border-secondary hover:bg-gray-blue-800"
        onClick={() => {}}
      >
        Add Task
      </button>
    </div>
  );
};
export default ResultsList;
