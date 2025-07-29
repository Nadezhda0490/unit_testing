import { expect } from "chai";
import User from "../src/user.js";

let user;

beforeEach(() => {
  user = new User("Nadja", "nadja@gmail.com");
});

afterEach(() => {
  user = null;
});

describe("Positive cases", () => {
  it("should initialize user with valid credentials", () => {
    expect(user.name).to.equal("Nadja");
    expect(user.email).to.equal("nadja@gmail.com");
    expect(user.isActive).to.be.false;
  });

  it("should activate the user", () => {
    user.activate();
    expect(user.isActive).to.be.true;
  });

  it("should deactivate the user", () => {
    user.activate();
    user.deactivate();
    expect(user.isActive).to.be.false;
  });

  it("should rename the user", () => {
    user.rename("Marina");
    expect(user.name).to.equal("Marina");
  });

  it("should pass email validation with valid email", () => {
    expect(User.isValidEmail("test@gmail.com")).to.be.true;
  });
});
