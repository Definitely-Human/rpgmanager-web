import { Link } from 'react-router-dom';
import mainIcon from '../../public/mainIcon.png';

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="flex items-center mb-2 text-4xl font-semibold whitespace-nowrap text-slate-100">
        <img className="h-16" src={mainIcon} alt="logo" />
        <span className="hidden md:block">
          <span className="text-primary">RPG</span> Manager
        </span>
        <span className="block md:hidden">
          <span className="text-primary">RPG</span>M
        </span>
      </h1>
    </Link>
  );
};
export default Logo;
