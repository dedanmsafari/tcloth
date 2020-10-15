import {connect} from  'react-redux';
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/withSpinner/withSpinner";
import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelectors";
import CollectionPage from "../collection/collectionpage";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
  WithSpinner
)(CollectionPage);


export default CollectionPageContainer;