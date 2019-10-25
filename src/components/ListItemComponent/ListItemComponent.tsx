import React from 'react';
import './ListItemComponent.scss';

interface IListItemProps {
  name: string,
  price: number,
  time: number,
  address: string,
  availableAt: string,
  rating: number
}

class ListItemComponent extends React.Component<IListItemProps, {}> {
  render() {
    return (
      <div className="listItemContainer">
        <div className="listItemContainer__columnContainer">
          <div className="listItemContainer__leftColumn">
            <div>
              <p className="listItemColumn__availableAtText">{this.props.availableAt}</p>
            </div>
            <div className="listItemContainer__nameColumn">
              <h2>{this.props.name}</h2>
              <p>{this.props.rating}</p>
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
