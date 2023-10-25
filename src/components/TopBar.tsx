import GlobalSearch from './GlobalSearch.tsx';
import Logo from './Logo.tsx';
import UserToolbar from './UserToolbar.tsx';

const TopBar = () => {
  return (
    <header className="flex items-center justify-between px-12 bg-gray-blue-700">
      <Logo />
      <GlobalSearch />
      <UserToolbar />
    </header>
  );
};
export default TopBar;
