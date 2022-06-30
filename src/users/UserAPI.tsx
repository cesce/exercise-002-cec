/**
 * User API that allows to map service response to the User type.
 * Manage errors and returns an empty User.
 */
import * as service from "../core/service";
import { User } from "./User";

export async function getUser(): Promise<User> {
  let user: User;
  let data;

  try {
    data = await service.http("https://randomuser.me/api/");
  } catch (err) {
    user = {
      firstName: "",
      lastName: "",
      picture: "",
      country: "",
    };
    return user;
  }

  user = {
    firstName: data.results[0].name.first,
    lastName: data.results[0].name.last,
    picture: data.results[0].picture.large,
    country: data.results[0].location.country,
  };

  return user;
}
