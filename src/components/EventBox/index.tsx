'use client'
import { useState } from 'react';

const EventBox = ({ title }: {
  title: string
}) => {
  const [open, setOpen] = useState(true);
  const handleCollapse = () => {
    setOpen(!open)
  }
  return(
    <div className="outline outline-main-color w-11/12 my-4  mx-auto rounded-lg">
      <div 
        onClick={handleCollapse}
        className="bg-main-color text-slate-200 hover:text-white hover:bg-main-color-darker
        py-2 px-2 cursor-pointer flex flex-row justify-between">
          <h1 className="text-2xl text-inherit w-fit">{title}</h1>
          <span className="material-symbols-outlined text-[36px]">{open ? 'keyboard_arrow_up': 'keyboard_arrow_down'}</span>
      </div>
      <div className={open ? "": "hidden"}>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
      </div>
    </div>
  );
};

export default EventBox;