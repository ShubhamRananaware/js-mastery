//same as java......

class user {
  constructor(uname, password) {
    this.uname = uname;
    this.pass = pass;
  }
  get uname() {
    return this._uname;
  }
  set uname(value) {
    this._uname = value;
  }
  get password() {
    return `${this._password}sr`;
  }

  set password(value) {
    this._password = value;
  }
}

const SR = new User("h@shubham.ai", "abc");
console.log(SR.email);
