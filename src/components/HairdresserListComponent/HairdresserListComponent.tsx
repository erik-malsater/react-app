import React from 'react';
import './HairdresserListComponent.scss';
import { getHairdressers } from '../../data/hairdressers';
import ListItemComponent from '../ListItemComponent/ListItemComponent';

interface IHairdresserListState {
  hairdressers: {},
  isLoading: boolean
}

class HairdresserListComponent extends React.Component<{}, IHairdresserListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hairdressers: {},
      isLoading: true,
    }
  }

  componentDidMount = () => {
    const loadedData = getHairdressers();
    this.setState({
      hairdressers: loadedData,
      isLoading: false
    })
  }

  render() {
    if(this.state.isLoading) {
      return <p>loading...</p>
    }
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
        <main className="hairdresserList__main">
          {(this.state.hairdressers as any).hairdressers.map((hairdresser: any) => {
            return <ListItemComponent 
                      key={hairdresser.id}
                      name={hairdresser.name}
                      price={hairdresser.price}
                      time={hairdresser.time}
                      address={hairdresser.address.street}
                      availableAt={hairdresser.availableAt}
                      rating={hairdresser.rating}
                      />
          })}
        </main>
        
      </div>
    )
  }
}
export default HairdresserListComponent;
