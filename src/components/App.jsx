import { Fragment } from 'react';

import Profile from './Profile/Profile'
import user from '../data/user.json'
import Statistics from './Statistics/Statistics'
import data from '../data/data.json'
import Friendlist from './Friendlist/Friendlist'
import friends from '../data/friends.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import items from '../data/transactions.json'

const { username, tag, location, avatar, stats } = user 

export const App = () => {
  return (<Fragment>
    <Profile avatar={avatar} username={username} location={location} stats={stats} tag={tag} ></Profile>
    <Statistics data={data} title={"Upload title"}></Statistics>
    <Friendlist friends={friends} ></Friendlist>
    <TransactionHistory items ={items}></TransactionHistory>
  </Fragment>

    );
};
