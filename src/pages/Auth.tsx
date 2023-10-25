import { useReactiveVar } from '@apollo/client';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { isLoggedInVar } from '../apollo.ts';
import Logo from '../components/Logo.tsx';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const isMember = location.pathname === '/auth/login';

  if (location.pathname === '/auth') return <Navigate to="login" />;
  if (isLoggedIn) return <Navigate to="/play" />;

  const toggleMember = () => {
    if (isMember) navigate('/auth/register');
    else navigate('/auth/login');
  };

  return (
    <main className="font-semibold h-screen grid items-center dark:bg-gray-blue-900 text-slate-100 min-h-[600px]">
      <div className="w-[400px] dark:bg-gray-blue-700 border-gray-900 border-x-2 mx-auto p-8 rounded-xl flex flex-col gap-3 drop-shadow-xl">
        <div className=" place-self-center">
          <Logo />
        </div>
        <h3 className="mt-3 text-2xl font-normal place-self-center text-secondary">
          {isMember ? 'Welcome back!' : 'Join for free!'}
        </h3>
        <Outlet />
        <p className="mt-2 place-self-center">
          {isMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            type="button"
            onClick={toggleMember}
            className="pl-3 text-secondary hover:text-secondary-600 "
          >
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </main>
  );
};
export default Auth;
