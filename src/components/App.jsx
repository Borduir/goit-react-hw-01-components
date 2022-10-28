import Profile from './user/Profile'
import Statistics from '../components/Statistics/Stats'
import user from './user/user.json'
import { Fragment } from 'react';
import dataList from '../components/Statistics/data.json'

const { username, tag, location, avatar, stats } = user 
export const App = () => {
  return (<Fragment>
    <Profile avatar={avatar} username={username} location={location} stats={stats} tag={tag} ></Profile>
    <Statistics dataList={dataList} statTitle={"Upload title"}></Statistics>
  </Fragment>
    );
};
