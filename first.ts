class User {
  private _name: string;
  private _login: string;
  private _password: string;

  static count: number = 0;

  constructor(name: string, login: string, password: string) {
    this._name = name;
    this._login = login;
    this._password = password;
    User.count++;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get login(): string {
    return this._login;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  showInfo(): void {
    console.log(`Имя: ${this._name}, Логин: ${this._login}`);
  }
}

class SuperUser extends User {
  private _role: string;

  static count: number = 0;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password);
    this._role = role;
    SuperUser.count++;
  }

  get role(): string {
    return this._role;
  }

  set role(role: string) {
    this._role = role;
  }

  showInfo(): void {
    console.log(`Имя: ${this.name}, Логин: ${this.login}, Роль: ${this._role}`);
  }
}

const userFirst = new User('Иван Иванов', 'ivan', 'ivan1234');
const userSecond = new User('Петя Петров', 'petr', 'petr1234');
const userThird = new User('Роман Романов', 'roman', 'roman1234');
const superUser = new SuperUser('Маша Цветочкина', 'masha', '1234', 'admin');

userFirst.showInfo();
superUser.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Кол-во обычных пользователей: ${users}`);
console.log(`Кол-во супер-пользователей: ${admins}`);

userThird.name = 'Роман Иванов';
userFirst.password = '1234';

console.log(userThird.name);
console.log(userSecond.password);
console.log(userSecond.login);
