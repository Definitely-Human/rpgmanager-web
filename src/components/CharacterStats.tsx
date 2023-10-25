import { useState } from 'react';
import charIcon from '../assets/icons/swordsman.png';
import widthStrings from '../utils/widthStrings.ts';

const CharacterStats = () => {
  const [percentage] = useState(0);
  const xp = 200;
  return (
    <div>
      <h2 className="text-3xl text-center text-primary">Charname</h2>
      <div className="flex justify-between m-2">
        <span>0</span>
        <span>24 LVL</span>
        <span>999</span>
      </div>
      <div className="block w-full h-2 bg-slate-500 ">
        <div className={`${widthStrings[percentage]} bg-secondary h-full`} />
      </div>

      <div className="mt-1 text-center">{`${xp} xp (${percentage}%)`}</div>
      <div className="grid grid-cols-2 mt-2">
        <img src={charIcon} alt="character icon" />
        <div className="flex flex-col justify-evenly">
          <span>Title: Master</span>
          <span>
            Coins: <span className="text-yellow-300">999</span>
          </span>
          <span>Xp To Next LVL: 799</span>
          <span>
            Skill closest to LVL-up:{' '}
            <span className="text-primary">Cooking</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CharacterStats;
