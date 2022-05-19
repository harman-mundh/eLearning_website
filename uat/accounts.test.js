/* login.test.js */

import {
  assertEquals,
  fail,
} from "https://deno.land/std@0.79.0/testing/asserts.ts";

import { login, register } from "../modules/accounts.js";
import { db } from "../modules/db.js";

Deno.test({
  name: "regiter a new user",
  async fn() {
    //arrange
    const username = "student3"; //each run creates a new user student3
    const password = "p455w0rd";
    //act
    const testNewRegister = await register({ username, password });
    assertEquals(testNewRegister, true, "Error at Register function");
    // delete the last created username "student3" from database
    await db.query(`DELETE FROM accounts where user="${username}";`);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: "regitering as pre-existing user",
  async fn() {
    //arrange
    const username = "doej";
    const password = "p455w0rd";
    //act
    try {
      await register({ username, password });
      fail("the function does not throw an exception");
    } catch (err) {
      //assert
      assertEquals(err.message, `username "${username}" already exists`);
    }
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: "logining as a pre-existing user",
  async fn() {
    //arrange
    const username = "doej";
    const password = "p455w0rd";
    //act
    const loginUser = await login({ username, password });
    //assert
    assertEquals(loginUser, username, "Error at Login function");
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: "logging as a non-existing user",
  async fn() {
    //arrange
    const username = "doe";
    const password = "p455w0rd";
    //act
    try {
      await login({ username, password });
      fail("the function does not throw an exception");
    } catch (err) {
      //assert
      assertEquals(err.message, `username "${username}" not found`);
    }
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: "logging with invalid password",
  async fn() {
    //arrange
    const username = "doej";
    const password = "password";
    //act
    try {
      await login({ username, password });
      fail("the function does not throw an exception");
    } catch (err) {
      //assert
      assertEquals(err.message, `invalid password for account "${username}"`);
    }
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
