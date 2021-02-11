import { Injectable } from "@angular/core";
import { User, UserProps } from "./../models/userModel";

import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private request = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  private state = {
    currentUser: {} as User,
    loggedInUserChanged: new BehaviorSubject<User>(null),
  };
  async signIn(email: string, password: string) {
    try {
      const user = await this.request.post(environment.loginRoute, {
        email: email,
        password: password,
      });
      const { token } = user.data;
      localStorage.setItem("token", token);
      const loggedInUser: User = User.buildUser({
        _id: user.data.data.user._id,
        email: user.data.data.user.email,
        password: user.data.data.user.password,
        name: user.data.data.user.name,
      });
      this.state.currentUser = loggedInUser;
      this.state.loggedInUserChanged.next(loggedInUser);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    this.request.get(environment.logoutRoute).then((_) => {
      this.state.currentUser = null;
      this.state.loggedInUserChanged.next(null);
    });
  }

  getAuthListener() {
    return this.state.loggedInUserChanged.asObservable();
  }

  getAuthenticatedUser() {
    return this.state.loggedInUserChanged.value;
  }
}
