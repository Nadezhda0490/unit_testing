export default class User {
  constructor(name, email) {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    if (!User.isValidEmail(email)) {
      throw new Error(
        "Invalid email! The format should be: username@gmail.com"
      );
    }

    this.name = name;
    this.email = email;
    this.isActive = false;
  }

  static isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  }

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }

  rename(newName) {
    if (!newName) {
      throw new Error("New name is not provided");
    }
    this.name = newName;
  }
}
