import { User } from "./User";

const UserComponent = ({ user }: { user: User | null }) => {
  return (
    <div className="UserComponent">
      <div>First Name: {user?.firstName}</div>
      <div>Last Name: {user?.lastName}</div>
      <div>Country: {user?.country}</div>
      <div className="userImage">
        <img alt="User profile" src={user?.picture}></img>
      </div>
    </div>
  );
};

export default UserComponent;
