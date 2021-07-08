import React from "react";
import Column from "./Column";
import ImageWithFallback from "./ImageWithFallback";
import { Link } from "react-router-dom";
import qs from "querystringify";
import { connect } from 'react-redux';


class Product extends React.Component {

  renderStock(stock) {
    if (stock) {
      return <button>Add to Cart</button>;
    }
    return <p>Out of Stock</p>;
  }
  
  render() {

   

    const { data, wishlist, btnClick , currencyCode} = this.props;
    if (this.props.location && this.props.location.search !== "") {
      console.log("QUERY", qs.parse(this.props.location.search));
    }
    // const wishlist=this.props.wishlist;
    return (
      <Column size={3}>
        <div class="p-4 shadow-sm mb-4 text-center">
          <Link to={"/product-detail/" + data.productId}>
            <ImageWithFallback source={data.productImage} />
          </Link>
          <h5 className="mt-2 text-capitalize">{data.productName}</h5>
          <h6>{data.productPrice} {currencyCode}</h6>
          <button
            onClick={() => btnClick(data.productId)}
            className="btn btn-sm btn-primary w-100"
          >
            Add to {wishlist ? "Wishlist" : "Cart"}
          </button>
          {/* {this.renderStock(data.productStock)} */}
        </div>
      </Column>
    );
  }

}

// connect(how to connect)(what to connect)
// how to connect : retrieving, modification
const mapStoreDataToProps = (state) => {
  return {
     currencyCode : state.currency
  };
};


export default connect(mapStoreDataToProps)(Product);

