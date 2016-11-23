import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './ListPage.less';
import Layout from '../components/Layout.js';



function listPage(props){
	function handleClick() {
	    props.dispatch({type: 'item/fetchList', payload: {data: 11111}})
	}
	
	return (
		<Layout>
			<h2>ListPage</h2>
			<button className={styles.btn} onClick={handleClick}>测试按钮</button>
		</Layout>
	)
}

export default connect()(listPage);