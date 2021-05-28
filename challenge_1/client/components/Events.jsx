import React from 'react';
import Event from './Event.jsx';


const Events = ({events}) => (
  <div>
    <table>
      {events.map((eventData, i) =>
        <Event event={eventData} key={i} />)}
    </table>
  </div>
);

export default Events;