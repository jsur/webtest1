import React, { Component } from 'react';
import Card from './Card';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          topic: 'Design',
          iconUrl: 'https://image.flaticon.com/icons/svg/997/997252.svg',
          description: 'description description'
        },
        {
          id: 2,
          topic: 'Web applications',
          iconUrl: 'https://image.flaticon.com/icons/svg/997/997225.svg',
          description: 'description description'
        },
        {
          id: 3,
          topic: 'Maintenance',
          iconUrl: 'https://image.flaticon.com/icons/svg/1018/1018694.svg',
          description: 'description description'
        }
      ]
    }
  }

  render() {

    const cards = this.state.cards.map(item => <Card item={item} key={item.id} />);

    return (
      <main className="main">
        <div className="main-img-layer">
        
        </div>
        <section className="main-section-1">
          <div className="main-section-1-content">
            <h1>We are nnn Consulting</h1>
            <div>
              <p>We create websites</p>
            </div>
          </div>
        </section>
        <section className="main-section-2">
          <div className="card-container">
          {cards}
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
