import { Link } from 'react-router-dom';
import Logo from '../components/Logo.tsx';

const Home = () => {
  return (
    <div className="h-screen font-semibold dark:bg-gray-blue-800 dark:text-slate-100">
      <header className="flex items-center justify-between h-20 p-4 border-b-2 border-gray-900 dark:bg-gray-blue-900">
        <Logo />
        <span className="text-2xl hover:text-primary">
          <Link to="/auth">Login/Register</Link>
        </span>
      </header>
      <main className="p-4">Please login in order to use this app.</main>
    </div>
  );
};
export default Home;
