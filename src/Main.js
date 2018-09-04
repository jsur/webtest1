import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
import TeamCard from './TeamCard';
import jorgeImg from './img/jorge_avila.jpeg';
import juliusImg from './img/julius_suominen.jpeg';
import priscillaImg from './img/priscilla_vera.jpg';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      serviceCards: [
        {
          id: 1,
          topic: 'Web applications',
          iconUrl: 'https://image.flaticon.com/icons/svg/1077/1077212.svg',
          description: 'description description'
        },
        {
          id: 2,
          topic: 'Design',
          iconUrl: 'https://image.flaticon.com/icons/svg/1077/1077213.svg',
          description: 'description description'
        },
        {
          id: 3,
          topic: 'Maintenance',
          iconUrl: 'https://image.flaticon.com/icons/svg/1077/1077198.svg',
          description: 'description description'
        }
      ],
      teamCards: [
        {
          id: 1,
          name: 'Jorge Avila',
          role: 'Full stack developer',
          pictureUrl: jorgeImg,
          description: 'Jorge has a long background in '
        },
        {
          id: 2,
          name: 'Julius Suominen',
          role: 'Full stack developer',
          pictureUrl: juliusImg,
          description: 'Julius has a long background in '
        },
        {
          id: 3,
          name: 'Priscilla Vera',
          role: 'Business development',
          pictureUrl: priscillaImg,
          description: 'Priscilla has a long background in lorem ipsum'
        }
      ],
      fields: {
        name: '',
        email: '',
        message: ''
      }
    }
  }

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  canSubmit = ({ name, email, message }) => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      return true;
    }
    return false;
  }

  render() {

    const serviceCards = this.state.serviceCards.map(item => <ServiceCard item={item} key={`service-${item.id}`} />);
    const teamCards = this.state.teamCards.map(item => <TeamCard item={item} key={`team-${item.id}`} />);

    return (
      <main className="main">
        <section className="main-section-1">
          <div className="main-section-1-content">
            <h1>We are Suola Consulting</h1>
            <div>
              <p className="main-header-p">We create websites and web applications.</p>
            </div>
          </div>
        </section>
        <section className="main-section-2">
          <h2 className="section-header">Our services</h2>
          <div className="card-container">
          {serviceCards}
          </div>
        </section>
        <section className="main-section-3">
          <h2 className="section-header">Team</h2>
          <div className="main-section-3-content">
          <div className="card-container">
            {teamCards}
          </div>
          </div>
        </section>
        <section className="main-section-4">
          <h2 className="section-header contact-header">Contact</h2>
          <div className="contact-form-container">
            <form className="contact-form" action="https://formspree.io/julius.suominen@gmail.com" method="POST">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.fields.name}
                onChange={this.onInputChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.fields.email}
                onChange={this.onInputChange}
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="contact-textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={this.state.fields.message}
                onChange={this.onInputChange}
              ></textarea>
              <button
                className="contact-button"
                type="submit"
                disabled={!this.canSubmit(this.state.fields)}
              >Send</button>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
