import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const cards = [
    {
      title: 'Mountain Adventure',
      description:
        'Explore the breathtaking mountain trails and enjoy the serene beauty of nature at its finest.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      tags: ['Travel', 'Nature'],
    },
    {
      title: 'City Lights',
      description:
        'Experience the vibrant nightlife and stunning architecture of modern cities around the world.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=250&fit=crop',
      tags: ['Urban', 'Photography'],
    },
    {
      title: 'Ocean Breeze',
      description:
        'Relax by the ocean and let the calming waves wash away your stress. A perfect getaway.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop',
      tags: ['Beach', 'Relaxation'],
    },
  ];

  return (
    <div className="App">
      <h1 className="app-title">Card Component</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            tags={card.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
