import { Interface } from "readline";

interface Login {
  email: string;
  password: string;
}

const today = new Date();

interface Register {
  name: string;
  email: string;
  password: string; // after that, create a second password to compare both and create a condition
  birthday: string;
  accoutDate: typeof today;
}

export async function UserLogin(data: Login) {
  const response = `Email is ${data.email}, your password is: ${data.password}`;
  console.log(response);
  return { message: response };
}
