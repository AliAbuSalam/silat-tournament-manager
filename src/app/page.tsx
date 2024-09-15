import EventBox from '@/components/EventBox';
import type { AllEvents } from '@/typing/event';
import { Suspense } from 'react';

import fetchServer from '@/lib/fetchServer';


const home = async () => {
  let res = await fetchServer('/event/all'); 
  let errorObject;
  let event;
  if(res.status === 'error'){
    errorObject = res.errorObject;
  } else {
    res = res as Response;
    if(res.status !== 200){
      errorObject = res.status;
    } else {
      event = await res.json() as AllEvents
    }
  }

  return(
    <main>
      {event ? 
        <>
          <EventBox title='Event yang sedang berlangsung' events={event.ongoing}/>
          <EventBox title='Event lama' events={event.finished}/>
        </>
        : <>error occured!</>
      }
    </main>
  )
}

export default home;