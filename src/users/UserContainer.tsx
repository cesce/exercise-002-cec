import { useEffect, useState } from "react";
import "./User.css";
import UserComponent from "./UserComponent";
import * as userAPI from "./UserAPI";
import { User } from "./User";

const UserContainer = () => {
  const [user, setUsers] = useState<User | null>(null);
  const [loading, setLoading] = useState(0);
  const [disable, setDisable] = useState(false);

  function callApi() {
    setLoading(1);
    setDisable(true);
    (async () => {
      const user = await userAPI.getUser();
      setUsers(user);
      setLoading(0);
      setDisable(false);
    })();
  }

  useEffect(() => {
    callApi();

    return () => {
      // Gets called when the component unmounts
    };
  }, []);

  function refreshUser() {
    callApi();
  }

  return (
    <div className="UserContainer">
      <UserComponent user={user} />
      <div className="buttonContainer">
        <button
          className={disable ? "buttonInstanceDisabled" : "buttonInstance"}
          onClick={refreshUser}
          disabled={disable}
        >
          {disable ? "Loading ..." : "New User"}
        </button>
      </div>
      {loading === 1 && (
        <div className="loadingText">Status: loading user ...</div>
      )}
      {loading === 0 && <div className="loadingText">Status: user loaded</div>}
    </div>
  );
};

export default UserContainer;
