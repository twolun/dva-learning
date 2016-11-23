import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';			//引入connect工具函数


//当前路由组件所需要的组件
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModel from '../components/Users/UserModel';

//当前路由所需要的样式
import styles from './Users.less';

function Users({ location, dispatch, users }){
	const {
    	loading, list, total, current,
    	currentItem, modalVisible, modalType
    } = users;


	const userSearchProps = {};
	const userModelProps = {

	};
	const userListProps = {
		total: total,
	    current: current,
	    loading: loading,
	    dataSource: list,
	};

	return (
		<div className="normal">
			{/* 用户筛选搜索框 */}
			<UserSearch {...userSearchProps} />

			{/* 用户信息展示列表 */}
			<UserList {...userListProps} />

			{/*添加用户，修改用户展示的浮层*/}
			<UserModel {...userModelProps} />
		</div>
	)
}
Users.propTypes = {
	users: PropTypes.object,
};

// 指定订阅数据，这里关联了 users
function mapStateToProps({ users }) {
  return {users};
}

export default connect(mapStateToProps)(Users);



