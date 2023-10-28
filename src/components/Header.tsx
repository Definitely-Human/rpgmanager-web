import { useReactiveVar } from '@apollo/client';
import { Link } from 'react-router-dom';
import { isLoggedInVar } from '../apollo.ts';
import Logo from './Logo.tsx';

const Header = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <header className=" bg-gray-blue-700">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <span className="text-2xl ">
          {isLoggedIn ? (
            <Link
              to="/play"
              className="px-10 py-2 mr-4 border-4 rounded-md border-secondary hover:bg-gray-blue-800"
            >
              Play
            </Link>
          ) : (
            <Link className=" hover:text-primary" to="/auth">
              Login/Register
            </Link>
          )}
        </span>
      </div>
    </header>
  );
};

export default Header;
