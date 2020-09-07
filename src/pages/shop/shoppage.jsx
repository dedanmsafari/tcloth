import React from "react";

import PrevCollection from "../../components/prevCollection/previewCollection";
import "./shop.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shopSelectors";
export const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PrevCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps= createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);
