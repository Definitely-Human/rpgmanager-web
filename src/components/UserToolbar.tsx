import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import charIcon from '../assets/icons/swordsman.png';
import useMe from '../hooks/useMe.tsx';

const UserToolbar = () => {
  const navigate = useNavigate();
  const { data, loading, error: reqError } = useMe();
  if (!data || !data?.me) {
    console.log(reqError); // TODO: Toast error
    return null;
  }
  const { user, ok, error } = data?.me || null;
  if (!ok) console.log(error); // TODO: Toast error and log out user.

  if (loading) return <h2 className="text-2xl">Loading...</h2>;
  return (
    <div className="flex items-center">
      <h5>Hello, {user?.username}</h5>
      <img
        src={charIcon}
        className="w-12 mx-2 border-2 border-gray-900 rounded-full "
        alt="profile"
      />
      <nav
        data-test="user-toolbar-menu"
        className="relative inline-block text-3xl group"
      >
        <FiChevronDown />
        <menu className="hidden hover:block group-hover:block w-48 bg-transparent pt-14 absolute z-10 right-0 top-[-10px]  text-xl">
          <li className="bg-gray-blue-900 hover:bg-gray-blue-950">
            <button
              type="button"
              onClick={() => {
                navigate('/profile');
              }}
              className="w-full px-3 py-2"
            >
              Account
            </button>
          </li>
          <li className="bg-error hover:bg-error-600">
            <button
              type="button"
              //   onClick={() => {
              //     dispatch(logoutUser());
              //     navigate('/');
              //   }}
              className="w-full px-3 py-2"
            >
              Logout
            </button>
          </li>
        </menu>
      </nav>
    </div>
  );
};
export default UserToolbar;
