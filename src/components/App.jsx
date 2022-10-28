import CreateUser from './CreateUser'
import user from '../render-files/user.json'

const { username, tag, location, avatar, stats } = user 
export const App = () => {
  return (
    <CreateUser avatar ={avatar} username ={username} location = {location} stats = {stats} tag={tag} ></CreateUser>
  );
};
