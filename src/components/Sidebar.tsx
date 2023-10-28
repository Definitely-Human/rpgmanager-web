import { GiCharacter, GiChecklist } from 'react-icons/gi';
import { IoIosStats } from 'react-icons/io';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const links = ['/play', '/play/character', '/play/stats', '/play/calendar'];
const icons = [
  <GiChecklist />,
  <GiCharacter />,
  <IoIosStats />,
  <RiCalendarTodoFill />,
];

const Sidebar = () => {
  return (
    <nav
      id="sidebar"
      className="relative border-r-2 border-gray-900 bg-gray-blue-900"
    >
      <div className="absolute top-[50%] w-full translate-y-[-50%]">
        {links.map((value, index) => {
          return (
            <NavLink
              className="block px-1 mb-5 border-gray-blue-700"
              to={value}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              end
            >
              <div className="h-[50px] text-5xl"> {icons[index]} </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
export default Sidebar;
