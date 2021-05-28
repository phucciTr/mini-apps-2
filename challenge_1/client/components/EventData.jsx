import React from 'react';

const EventData = ({ dataKey, value }) => (
  <tr>
     <td>{dataKey}</td>
     <td>{value}</td>
  </tr>
);

export default EventData;