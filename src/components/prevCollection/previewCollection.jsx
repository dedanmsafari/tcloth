import React from 'react';
import CollectionItem from '../collectionItem/collectionItem';
import './prevCollection.scss';
import { OptionLink } from '../../components/header/headerstyles';
const PrevCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>
        {' '}
        <OptionLink to={`/shop/${title.toLowerCase()}`}>
          {title.toUpperCase()}
        </OptionLink>
      </h1>

      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PrevCollection;
