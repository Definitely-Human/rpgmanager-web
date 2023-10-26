import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.tsx';
import TopBar from '../components/TopBar.tsx';

const Play = () => {
  return (
    <>
      <Helmet>
        <title> Play | RPG Manager</title>
      </Helmet>
      <div className="grid grid-rows-[4rem_minmax(300px,_1fr)] h-screen dark:text-slate-100 font-semibold">
        <TopBar />
        <div className="grid grid-cols-[60px_1fr] h-full ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Play;
