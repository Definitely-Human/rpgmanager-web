import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

const FilteringOptions = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4">
      <button type="button" className="flex items-center ">
        <ImCheckboxChecked />
        <span className="ml-2">Tasks</span>
      </button>
      <button type="button" className="flex items-center ">
        <ImCheckboxUnchecked />
        <span className="ml-2">Lists</span>
      </button>
      <button type="button" className="flex items-center ">
        <ImCheckboxUnchecked />
        <span className="ml-2">Routines</span>
      </button>
      <button type="button" className="flex items-center ">
        <ImCheckboxUnchecked />
        <span className="ml-2">Notes</span>
      </button>
    </div>
  );
};
export default FilteringOptions;
