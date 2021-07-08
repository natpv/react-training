import React from 'react';

function ProductDetail(props) {
    return <h1>Product Detail : {props.match.params.id}</h1>
}

export default ProductDetail;