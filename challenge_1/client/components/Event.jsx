import React from 'react';
import EventData from './EventData.jsx';


const Event = ({ event }) => (
  <tbody>
      {Object.entries(event).map((metaData, i) =>
       <EventData dataKey={metaData[0]} value={metaData[1]} key={i}/>)}
     <br/>
  </tbody>
);


export default Event;