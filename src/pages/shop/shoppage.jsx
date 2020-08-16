import React, { Component } from "react";
import SHOP_DATA from "./shopdata";
import PrevCollection from '../../components/prevCollection/previewCollection';
import './shop.scss';
export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const {collections} = this.state;
    return <div className='shop-page'>
    {collections.map(({id,...otherCollectionProps}) => <PrevCollection key={id} {...otherCollectionProps}/>)}
    </div>;
  }
}
