import React from 'react';
import './event.css';

import ballroom from '../../img/a.png';
import garden from '../../img/a.png';
import crystal from '../../img/a.png';
import cristal from '../../img/a.png';

const events = [
  {
    title: 'Grand Ballroom',
    description: 'Enjoy an eventing using baildesh, all events verves',
    image: ballroom,
  },
  {
    title: 'Garden Terrace',
    description: 'Enjoy an extending garden gatherings an events',
    image: garden,
  },
  {
    title: 'Crystal Room',
    description: 'Celeble elle on leatsire joogge gardem, an an eventing',
    image: crystal,
  },
  {
    title: 'Cristal Room',
    description: 'Enitch eamming services taras suma. and more.',
    image: cristal,
  },
];

const EventSpaces = () => {
  return (
    <div className="event-wrapper">
      <h2>Our Event Spaces</h2>
      <div className="event-row">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSpaces;
