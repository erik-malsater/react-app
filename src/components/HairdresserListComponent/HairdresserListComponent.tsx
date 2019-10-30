import React from 'react';
import './HairdresserListComponent.scss';
import { getHairdressers } from '../../data/hairdressers';
import ListItemComponent from '../ListItemComponent/ListItemComponent';

interface IHairdresserListState {
  hairdressers: {},
  isLoading: boolean,
  isPriceMenuHidden: boolean,
  minimumPrice: number,
  maximumPrice: number
}

class HairdresserListComponent extends React.Component<{}, IHairdresserListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hairdressers: {},
      isLoading: true,
      isPriceMenuHidden: true,
      minimumPrice: 200,
      maximumPrice: 900
    }
  }

  componentDidMount = () => {
    const loadedData = getHairdressers();

    this.setState({
      hairdressers: loadedData,
      isLoading: false
    })
  }

  togglePriceMenu = () => {
    this.setState({
      isPriceMenuHidden: !this.state.isPriceMenuHidden
    })
  }

  handlePriceInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    } as IHairdresserListState);
  }

  render() {
    if(this.state.isLoading) {
      return <p>loading...</p>
    }

    let filterItemList = () => {
      let hairdressers: any[] = (this.state.hairdressers as any).hairdressers;
      let filteredItemList = hairdressers.filter(hairdresser => parseInt(hairdresser.price) >= this.state.minimumPrice && parseInt(hairdresser.price) <= this.state.maximumPrice);
      return filteredItemList;
    }

    let filteredList = filterItemList();
    
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
          <div className="header__row header__row--pointer" onClick={this.togglePriceMenu}>
            <p className="header__selectedPriceText">Pris {this.state.minimumPrice}-{this.state.maximumPrice} kr</p>
            <button className="header__button">
              <img src={require("../../images/down-arrow-icon.svg")} alt="Dropdown menu icon"/>
            </button>
          </div>
          <div className={`header__priceMenuRow ${this.state.isPriceMenuHidden ? "hidden": null}`} id="header__priceMenuRow">
            <label htmlFor="minimumPriceInput">Minimum pris</label>
            <input type="range" name="minimumPrice" min="1" max="3000" value={this.state.minimumPrice} id="minimumPriceInput" onChange={this.handlePriceInputChange}/>
            <label htmlFor="maximumPriceInput">Maximum pris</label>
            <input type="range" name="maximumPrice" min="1" max="3000" value={this.state.maximumPrice} id="maximumPriceInput" onChange={this.handlePriceInputChange}/>
          </div>
        </header>
        <main className="hairdresserList__main">
          {filteredList.map((hairdresser: any) => {
            return <ListItemComponent 
                      key={hairdresser.id}
                      id={hairdresser.id}
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
