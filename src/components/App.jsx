import { Fragment } from 'react';

import Profile from './user/Profile'
import user from './user/user.json'
import Statistics from '../components/Statistics/Stats'
import dataList from '../components/Statistics/data.json'
import Friendlist from './Friendlist/Friendlist'
import friends from '../components/Friendlist/friends.json'
import TransactionHistory from './Transactions/TransactionHistory'
import items from '../components/Transactions/transactions.json'



const { username, tag, location, avatar, stats } = user 

export const App = () => {
  return (<Fragment>
    <Profile avatar={avatar} username={username} location={location} stats={stats} tag={tag} ></Profile>
    <Statistics dataList={dataList} statTitle={"Upload title"}></Statistics>
    <Friendlist friends={friends} ></Friendlist>
    <TransactionHistory items ={items}></TransactionHistory>
  </Fragment>

    );
};
