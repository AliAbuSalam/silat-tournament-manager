'use client'
import { useState, useEffect } from "react";

import { Event } from "@/typing/event";
import parseDate from "@/lib/parseDate";

const EventDetails = ({ event }: {
  event: Event
}) => {
  const [timer, setTimer] = useState<{
    days: number
    hours: number
    minutes: number
  } | undefined >(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const calculateTimer = () => {
    const now = new Date();
    const dateRegisterEndObject = new Date(event.dateRegisterEnd);
    const timeDifference = (dateRegisterEndObject.getTime() - now.getTime())/1000;
      if(timeDifference <= 0){
      setIsOpen(false);
      return;
    }
    const days = Math.floor(timeDifference/(3600*24));
    const hours = Math.floor((timeDifference%(3600*24))/3600);
    const minutes = Math.floor(timeDifference%(3600)/60);
    setTimer({
      days,
      hours,
      minutes
    });
    setIsOpen(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimer()
    }, 1000)
    return () => clearTimeout(timer);
  })
  
  return(
    <div>
      {event.eventName}<br/>
      {parseDate(event.dateStart)} - {parseDate(event.dateEnd)}<br />
      {isOpen ? 
      <>Pendaftaran dibuka selama {timer?.days} hari {timer?.hours} jam {timer?.minutes} minutes</>: 
      <>Pendaftaran telah ditutup</>}

    </div>
  );
}

export default EventDetails;