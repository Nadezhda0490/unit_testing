import { expect } from "chai";
import User from "../src/user.js";

let user;

beforeEach(() => {
  user = new User("Nadja", "nadja@gmail.com");
});

afterEach(() => {
  user = null;
});

describe("Negative cases", () => {
  it("should throw error when using invalid email", () => {
    expect(() => new User("Mikki", "mikki.com")).to.throw("Invalid email");
  });

  it("should throw error if name remains empty", () => {
    expect(() => new User("", "mikki@gmail.com")).to.throw(
      "Name and email are required"
    );
  });

  it("should throw error if email remains empty", () => {
    expect(() => new User("Mikki", "")).to.throw("Name and email are required");
  });

  it("should throw error if new name is not provided", () => {
    expect(() => user.rename("")).to.throw("New name is not provided");
  });

  it("should return false when using invalid email format", () => {
    const value = User.isValidEmail("@gmail.com");
    expect(value).to.be.false;
  });
});
