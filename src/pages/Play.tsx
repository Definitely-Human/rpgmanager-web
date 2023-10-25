import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar.tsx';

const Play = () => {
  return (
    <div className="grid grid-rows-[60px_minmax(300px,_1fr)] h-screen dark:text-slate-100 font-semibold">
      <Helmet>
        <title> Play | RPG Manager</title>
      </Helmet>
      <TopBar />
    </div>
  );
};
export default Play;
