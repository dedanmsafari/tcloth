import React from "react";
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelectors';
import "./collection.scss";
import CollectionItem from "../../components/collectionItem/collectionItem";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>collection PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state,ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
