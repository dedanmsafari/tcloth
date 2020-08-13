import React from "react";
import CollectionItem from "../collectionItem/collectionItem";
import "./prevCollection.scss";
const PrevCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otheritemProps }) => (
            <CollectionItem key={id} {...otheritemProps} />
          ))}
      </div>
    </div>
  );
};

export default PrevCollection;
