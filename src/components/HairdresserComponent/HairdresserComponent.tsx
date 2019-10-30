import React from 'react'
import { RouteComponentProps } from 'react-router';
import { getSingleHairdresser } from '../../data/hairdressers';
import './HairdresserComponent.scss';
import { Link } from 'react-router-dom';

interface IHairdresserState {
  name: string,
  rating: number,
  street: string,
  zip: string,
  city: string,
  closes: string,
  phone: string,
  webUrl: string,
  description: string,
  isLoading: boolean
}

class HairdresserComponent extends React.Component< RouteComponentProps, IHairdresserState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      rating: 0,
      street: "",
      zip: "",
      city: "",
      closes: "",
      phone: "",
      webUrl: "",
      description: "",
      isLoading: true

    }
  }
  componentDidMount() {
    let hairdresserId = (this.props.match.params as any).id;
    const loadedData = (getSingleHairdresser(hairdresserId) as any);
    this.setState({
      name: loadedData!.name,
      rating: loadedData!.rating,
      street: loadedData!.address.street,
      zip: loadedData!.address.zip,
      city: loadedData!.address.city,
      closes: loadedData!.closes,
      phone: loadedData!.phone,
      webUrl: loadedData!.webUrl,
      description: loadedData!.description,
      isLoading: false
    })
    
  }
  render() {
    if(this.state.isLoading) {
      return <p>loading...</p>
    }

    let stars = [];
    for(let i = 0; i < 5; i++) {
      if(i < this.state.rating) {
        stars.push(<img key={i} src={require("../../images/filled-star-icon.svg")} alt="Filled star icon"/>)
      } else {
        stars.push(<img key={i} src={require("../../images/hollow-star-icon.svg")} alt="Hollow star icon"/>)
      }
    }

    return (
      <div className="hairdresserContainer">
        <header className="hairdresserContainer__header">

          <div className="header__container">
            <div className="header__topContainer">
              <Link to={"/"}>
                <img src={require("../../images/arrow-back-white-icon.svg")} alt="Back to home icon"/>
              </Link>
              <img src={require("../../images/heart-icon.svg")} alt="Like icon"/>
            </div>
            <div className="header__bottomContainer">
              <h1>{this.state.name}</h1>
              <p className="header__starContainer">{stars}</p>
            </div>
          </div>
        </header>
        <nav className="hairdresserContainer__navbar">
          <div className="navbar__tab">
            <p className="tab__text">Info</p>
          </div>
          <div className="navbar__tab">
            <p className="tab__text">Schema</p>
          </div>
          <div className="navbar__border"></div>
        </nav>
        <div className="hairdresserContainer__gutter"></div>
        <main className="hairdresserContainer__main">

          <div className="hairdresserContainer__mainRow">
            <div className="mainRow__container">
              <img src={require("../../images/address-icon.svg")} className="mainRow__icon" alt="Address icon"/>
              <p className="mainRow__text">{this.state.street}, {this.state.zip} {this.state.city}</p>
            </div>
            <hr className="mainRow__border"/>
          </div>

          <div className="hairdresserContainer__mainRow">
            <div className="mainRow__container">
              <img src={require("../../images/closes-icon.svg")} className="mainRow__icon" alt="Clock icon"/>
              <p className="mainRow__text">Öppet till {this.state.closes} idag</p>
              <img className="mainRow__rightIcon" src={require("../../images/down-arrow-icon.svg")} alt="Dropdown menu icon"/>
            </div>
            <hr className="mainRow__border"/>
          </div>

          <div className="hairdresserContainer__mainRow">
            <div className="mainRow__container">
              <img src={require("../../images/phone-icon.svg")} className="mainRow__icon" alt="Phone icon"/>
              <p className="mainRow__text">{this.state.phone}</p>
            </div>
            <hr className="mainRow__border"/>
          </div>

          <div className="hairdresserContainer__mainRow">
            <div className="mainRow__container">
              <img src={require("../../images/web-icon.svg")} className="mainRow__icon" alt="Webpage icon"/>
              <p className="mainRow__text">{this.state.webUrl}</p>
            </div>
            <hr className="mainRow__border"/>
          </div>

          <div className="main__descriptionContainer">
            <p>{this.state.description}</p>
          </div>
          
        </main>
        
      </div>
    )
  }
}
export default HairdresserComponent;
