export interface UserProps {
  _id?: string;
  email: string;
  password: string;
  name: string;
}

export class User {
  private props: UserProps;
  constructor(userProps: UserProps) {
    this.props = userProps;
  }

  get userId() {
    return this.props._id;
  }

  get email() {
    return this.props.email;
  }

  get name() {
    return this.props.name;
  }

  public static buildUser(props: UserProps) {
    if (!props) {
      return null;
    }
    return new User(props);
  }
}
