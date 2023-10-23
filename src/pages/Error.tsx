import { Link } from 'react-router-dom';
import Logo from '../components/Logo.tsx';

const Error = () => {
  return (
    <div className="h-screen font-semibold dark:bg-gray-blue-800 dark:text-slate-100">
      <header className="flex items-center justify-between h-20 p-4 border-b-2 border-gray-900 dark:bg-gray-blue-900">
        <Link to="/">
          <Logo />
        </Link>
      </header>
      <main className="p-4">
        <h2 className="block text-3xl text-center">
          Error <span className="text-primary">404</span>
        </h2>
        <h3 className="block text-2xl text-center">Page not found</h3>
        <h3 className="block text-2xl text-center text-secondary hover:text-secondary-600">
          <Link to="/">Return to home</Link>
        </h3>
      </main>
    </div>
  );
};
export default Error;
