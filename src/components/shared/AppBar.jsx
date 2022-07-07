import { useState } from 'react';

function AppBar({ tab, onTabChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`bg-white border p-4 sm:p-0 sm:h-14 shadow-md 
        absolute sm:sticky top-9 sm:top-0 right-6 sm:right-0
        flex flex-col sm:flex-row sm:items-center sm:justify-center 
        gap-4 lg:gap-6 font-mono scale-0 sm:scale-100 origin-top-right
        transition-all z-10 ${isOpen && 'scale-100'}`}
      >
        <TabButton onClick={onTabChange} tab={tab} changeTo="Home" />
        <TabButton onClick={onTabChange} tab={tab} changeTo="Skills" />
        <TabButton onClick={onTabChange} tab={tab} changeTo="Projects" />
        <TabButton onClick={onTabChange} tab={tab} changeTo="Contact" />
        <TabButton onClick={onTabChange} tab={tab} changeTo="CV" />
      </div>
      <div className="absolute right-4 top-4 sm:hidden">
        <MobileTabToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

function MobileTabToggleButton({ isOpen, setIsOpen }) {
  return (
    <button
      className="flex flex-col gap-1"
      onClick={() => setIsOpen((previousState) => !previousState)}
    >
      <div
        className={`w-5 h-[3px] bg-stone-800 transition-all origin-left
        ${isOpen && 'rotate-45'}`}
      ></div>
      <div
        className={`w-5 h-[3px] bg-stone-800 transition-all 
        ${isOpen && 'opacity-0'}`}
      ></div>
      <div
        className={`w-5 h-[3px] bg-stone-800 transition-all origin-left
        ${isOpen && '-rotate-45'}`}
      ></div>
    </button>
  );
}

function TabButton({ onClick, tab, changeTo }) {
  const isActive = changeTo === tab;
  return (
    <button
      title={changeTo}
      className={`text-sm transition-opacity ${
        isActive
          ? 'font-bold opacity-100 underline'
          : 'opacity-60 hover:opacity-100'
      }`}
      onClick={() => onClick(changeTo)}
      disabled={isActive}
    >
      {changeTo}
    </button>
  );
}

export default AppBar;
