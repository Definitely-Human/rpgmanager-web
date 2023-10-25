import CategoriesList from '../components/CategoriesList.tsx';
import CharacterStats from '../components/CharacterStats.tsx';
import EditorSelector from '../components/EditorSelector.tsx';
import FilteringOptions from '../components/FilteringOptions.tsx';
import ItemList from '../components/ItemList.tsx';
import ModuleBlock from '../components/ModuleBlock.tsx';
import RemindersList from '../components/ReminderList.tsx';

const PlayMain = () => {
  return (
    <main className="grid grid-cols-[1fr_3fr_1fr]">
      <div className="bg-gray-blue-800 border-r-2 border-gray-900 grid grid-rows-[1fr_3fr_1fr] min-h-0 min-w-0">
        <ModuleBlock name="Filtering options">
          <FilteringOptions />
        </ModuleBlock>
        <ModuleBlock name="Categories">
          <CategoriesList />
        </ModuleBlock>
        <ModuleBlock name="Reminders">
          <RemindersList />
        </ModuleBlock>
      </div>
      <div className="bg-gray-blue-900 grid grid-rows-[2fr_3fr] min-h-0 min-w-0">
        <ModuleBlock>
          <ItemList />
        </ModuleBlock>
        <EditorSelector />
      </div>
      <div className="border-l-2 border-gray-900 bg-gray-blue-800">
        <ModuleBlock name="Character">
          <CharacterStats />
        </ModuleBlock>
      </div>
    </main>
  );
};
export default PlayMain;
