import React from 'react';
import './HairdresserListComponent.scss';
import { getHairdressers } from '../../data/hairdressers';

interface IHairdresserListState {
  hairdressers: [];
}

class HairdresserListComponent extends React.Component<{}, IHairdresserListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hairdressers: []
    }
  }
  render() {
    return (
      <div className="hairdresserListContainer">
        <header className="hairdresserListContainer__header">
          <nav className="header__row">
            <button className="header__button">
              <img className="navbar__icon" src={require("../../images/back-arrow-icon.svg")} alt="Go back icon"/>
            </button>
            <h1>Hår</h1>
            <button className="header__button">
              <img src={require("../../images/settings-icon.svg")} alt="Settings icon"/>
            </button>
          </nav>
          <div className="header__row">
            <p className="header__selectedPriceText">Pris 250-500 kr</p>
            <button className="header__button">
              <img src={require("../../images/down-arrow-icon.svg")} alt="Dropdown menu icon"/>
            </button>
          </div>
        </header>
        <main>
          

        </main>
        
      </div>
    )
  }
}
export default HairdresserListComponent;
