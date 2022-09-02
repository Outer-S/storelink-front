import { AxiosResponse } from "axios";
import Api from "./axios";
import { User, Store } from "./types";

export const registerUser = async function (user: User, store: Store) {
  if (
    !(
      "firstname" in user &&
      "lastname" in user &&
      "password" in user &&
      "email" in user
    )
  )
    throw new Error("User Input lacking");
  if (!("name" in store && "subscriptionType" in store))
    throw new Error("Store input lacking");

  const data = {
    user: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email.email,
      password: user.password?.password,
    },
    store: {
      name: store.name,
      subscription_type: store.subscriptionType,
    },
  };
  let response: AxiosResponse = await Api.post("/users/sign_up", data);
};

export const confirmEmail = async function (userId: string) {
  let response: AxiosResponse = await Api.get(`/users/${userId}/confirm_email`);
  console.log(response.data);
};

export const getToken = async function (user: User) {
  if (!("email" in user && "password" in user))
    throw new Error("Password or email missing");

  let data = new URLSearchParams();
  data.append("username", user.email.email);
  data.append("password", user.password?.password as string);

  let response: AxiosResponse = await Api.post(`/users/token`, data, {
    headers: {"Content-Type":"application/x-www-form-urlencoded"},
  });
  
  console.log(response.data);
  
  return response.data
};
