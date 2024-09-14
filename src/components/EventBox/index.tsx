'use client'
import { useState } from 'react';
import EventDetails from './EventDetails';

import type { Event } from '@/typing/event';

const EventBox = ({ title, events }: {
  title: string,
  events: Event[]
}) => {
  console.log('events: ', events)
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
        {events.map((e) => <EventDetails key={e.id} event={e}/>)}
      </div>
    </div>
  );
};

export default EventBox;