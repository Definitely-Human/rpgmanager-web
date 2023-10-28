import { Link } from 'react-router-dom';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

const Error = () => {
  return (
    <div className="min-h-screen font-semibold dark:bg-gray-blue-800 dark:text-slate-100">
      <Header />
      <main className="p-4 pt-40 h-[450px]">
        <h2 className="block mb-5 text-3xl text-center">
          Error <span className="text-primary">404</span>
        </h2>
        <h3 className="block text-2xl text-center">
          Page you are looking for does not exist or has been moved.
        </h3>
        <h3 className="block text-2xl text-center text-secondary hover:text-secondary-600">
          <Link to="/">Return to home</Link>
        </h3>
      </main>
      <Footer />
    </div>
  );
};
export default Error;
