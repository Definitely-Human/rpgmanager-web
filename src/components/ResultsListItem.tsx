import { Task } from '../__generated__/graphql.ts';
import { convertAPIDateToString } from '../utils/dateTime.ts';

type ResultsListItemProps = {
  item: Task;
};

const ResultsListItem = ({ item }: ResultsListItemProps) => {
  return (
    <tr
      className="border-2 border-gray-900 cursor-pointer hover:bg-gray-blue-800"
      onClick={() => {}}
    >
      <td className="py-1">{item.title}</td>
      <td>{item.due_to ? convertAPIDateToString(item.due_to) : 'Not set'}</td>
      <td>
        {item.is_complete ? <span className="text-secondary">Yes</span> : 'No'}
      </td>
      <td>{item.is_favorite ? 'Yes' : 'No'}</td>
      <td>{/* item.tags.map((tag) => tag.name + ', ') */}</td>
    </tr>
  );
};
export default ResultsListItem;
