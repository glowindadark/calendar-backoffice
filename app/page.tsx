'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='w-full items-center justify-between font-mono text-sm p-12'>
        <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />
      </div>
    </main>
  );
}
