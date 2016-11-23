import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Products.less';
import ProductList from '../components/ProductList/ProductList';

function product(props){
	return (
		<div className={styles.productPage}>
	      <h2>Popular Products</h2>
	  {/*
	  */}
	      <ProductList
	        data={props.products.list}
	        loading={props.products.loading}
	        dispatch={props.dispatch}
	      />
	    </div>
	)
}

function mapToProps({ products }){
	return { products}
}

export default connect(mapToProps)(product)









