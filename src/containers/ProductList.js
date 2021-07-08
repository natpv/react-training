import React from 'react';
import Product from '../components/Product';
import ProductService from '../services/ProductService';
import { connect } from 'react-redux';
import CartActions from '../store/actions/CartActions';

class ProductList extends React.Component {

    state = { pList:[] };

    addToCart(id, product) {
        this.props.addItem(product);
        this.props.history.push('/cart');
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        try {
          const response = await ProductService.getProducts();
          
        this.setState( {pList : response.data});
          console.log("SUCCESS", this.state.pList);
        } catch (e) {
          console.log("ERROR", e);
        }
      }
    render() {
       
        return (
            <div className="row">
                { this.state.pList.map((value) => (
                    <Product key ={value.productId} data={value} btnClick={(id) => this.addToCart(id, value)}/>
                ))
                }
                
                {/* <Product data={pList} wishlist={true} btnClick={() => console.log("Button clicked")}/> */}
            </div>
        )
            
        
    }
}



// connect(how to connect)(what to connect)
// how to connect : retrieving, modification
const mapStoreDataToProps = (storeData) => {
    return {
      // props_name : store_data
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      // props_name : action_to_dispatch
      addItem: (p) => dispatch(CartActions.addToCart(p)),
    };
  };
  export default connect(mapStoreDataToProps, mapDispatchToProps)(ProductList);
  