import { useReactiveVar } from '@apollo/client';
import { selectedItemVar } from '../apollo.ts';
import ListEditor from './ListEditor.tsx';
import TaskEditor from './TaskEditor.tsx';

const EditorSelector = () => {
  const selectedItem = useReactiveVar(selectedItemVar);
  if (selectedItem === null) return null;
  switch (selectedItem.type) {
    case 'task':
      return <TaskEditor />;
    case 'list':
      return <ListEditor />;

    default:
      return <h1 className="text-3xl text-center">Error loading editor.</h1>;
  }
};
export default EditorSelector;
