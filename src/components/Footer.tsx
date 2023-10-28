import { useReactiveVar } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import mainIcon from '../../public/mainIcon.png';
import { isLoggedInVar } from '../apollo.ts';

const Footer = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <footer className="h-[550px] bg-gray-blue-950">
      <div className="grid max-w-screen-xl grid-cols-3 p-10 mx-auto lg:gap-x-10">
        <div>
          <h3 className="text-2xl">Contact us</h3>
          <form className="grid mt-3 text-lg gap-y-3 ">
            <label htmlFor="your-name-input">
              Your name
              <input type="text" id="your-name-input" className="input" />
            </label>
            <label htmlFor="your-email-input">
              Your email
              <input type="text" id="your-email-input" className="input" />
            </label>
            <label htmlFor="your-message-input">
              Message
              <textarea
                rows={10}
                id="your-message-input"
                className="h-40 resize-none input"
              />
            </label>
            <button
              type="submit"
              className="px-10 py-2 mr-4 border-4 rounded-md border-secondary hover:bg-gray-blue-800 place-self-start"
            >
              Send
            </button>
          </form>
        </div>
        <div className="px-10 text-lg" id="sitemap">
          <h3 className="text-2xl">Sitemap</h3>
          <p className="mb-3 font-normal ">List of available pages.</p>
          <div className="flex flex-col justify-between lg:flex-row">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/auth/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/login">Login</NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              )}
            </ul>
            {isLoggedIn && (
              <ul>
                <li>
                  <NavLink to="/play">Play</NavLink>
                </li>
                <li>
                  <NavLink to="/play/character">Character</NavLink>
                </li>
                <li>
                  <NavLink to="/play/stats">Statistics</NavLink>
                </li>
                <li>
                  <NavLink to="/play/calendar">Calendar</NavLink>
                </li>
              </ul>
            )}
            <div /> {/* Empty div to fill the space */}
          </div>
        </div>
        <div className="px-10 text-lg">
          <img
            src={mainIcon}
            alt="logo"
            className="w-8/12 mb-5 rounded-full lg:w-4/12 bg-gray-blue-900"
          />
          <p>Contact info:</p>
          <p> +48 794 512 667</p>
          <p>
            humanworks247
            <br className="lg:hidden" />
            @gmail.com
          </p>
        </div>
      </div>
      <div className="h-10 bg-gray-blue-900 ">
        <div className="max-w-screen-xl px-10 py-2 mx-auto text-center text-gray-400">
          © Copyright Alexander Savchuk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
