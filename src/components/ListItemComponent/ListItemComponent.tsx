import React from 'react';
import './ListItemComponent.scss';
import { Redirect } from 'react-router';

interface IListItemProps {
  id: number,
  name: string,
  price: number,
  time: number,
  address: string,
  availableAt: string,
  rating: number
}

interface IListItemState {
  toHairdresser: boolean;
}

class ListItemComponent extends React.Component<IListItemProps, IListItemState> {
  constructor(props: any) {
    super(props);
    this.state = {
      toHairdresser: false
    }
  }

  handleRedirect = () => {
    this.setState({
      toHairdresser: true
    })
  }

  render() {

    if(this.state.toHairdresser) {
      return <Redirect to={"/hairdresser/" + this.props.id} />
    }

    let stars = [];
    for(let i = 0; i < 5; i++) {
      if(i < this.props.rating) {
        stars.push(<img key={i} src={require("../../images/filled-star-icon.svg")} alt="Filled star icon"/>)
      } else {
        stars.push(<img key={i} src={require("../../images/hollow-star-icon.svg")} alt="Hollow star icon"/>)
      }
    }
    return (
      <div className="listItemContainer" onClick={this.handleRedirect}>
        <div className="listItemContainer__columnContainer">
          <div className="listItemContainer__leftColumn">
            <div>
              <p className="listItemColumn__availableAtText">{this.props.availableAt}</p>
            </div>
            <div className="listItemContainer__nameColumn">
              <h2>{this.props.name}</h2>
              <div className="nameColumn__ratingContainer">{stars}</div>
              <p className="listItemColumn__addressText">{this.props.address}</p>
            </div>
          </div>

          <div className="listItemContainer__rightColumn">
          
            <div>
              <p className="listItemColumn__priceText">{this.props.price} kr</p>
              <p className="listItemColumn__timeText">{this.props.time} min</p>
            </div>
            <div className="listItemContainer__arrowColumn">
              <img src={require("../../images/forward-arrow-icon.svg")} alt="Go to icon"/>
            </div>
          </div>
        </div>
        <hr className="listItem__bottomBorder"/>
      </div>
    )
  }
}
export default ListItemComponent;
