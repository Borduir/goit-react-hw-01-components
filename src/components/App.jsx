import Profile from './user/Profile'
import user from './user/user.json'

const { username, tag, location, avatar, stats } = user 
export const App = () => {
  return (
    <Profile avatar = {avatar} username = {username} location = {location} stats = {stats} tag = {tag} ></Profile>
  );
};
