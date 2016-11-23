import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

function count(props){
	return (
		<div>
	      <h2>{ props.count }</h2>
	      <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
	      <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
	    </div>
	)
}

function mapStateToProps({ count }){
	return { count }
}

export default connect(mapStateToProps)(count);