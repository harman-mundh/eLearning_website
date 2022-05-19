/** @module accounts.js */

import {
  compare,
  genSalt,
  hash,
} from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";

import { db } from "./db.js";

const saltRounds = 10;
const salt = await genSalt(saltRounds);

/**
 * Checks user credentials.
 * @param {string} username
 * @param {string} password
 * @returns {string} the username for the valid account
 */
export async function login(data) {
  console.log(data);
  let mySql =
    `SELECT count(id) AS count FROM accounts WHERE user="${data.username}";`;
  let records = await db.query(mySql);
  if (!records[0].count) {
    throw new Error(`username "${data.username}" not found`);
    //alert('User not found')
  }
  mySql = `SELECT pass FROM accounts WHERE user = "${data.username}";`;
  records = await db.query(mySql);
  const valid = await compare(data.password, records[0].pass);
  if (valid === false) {
    throw new Error(`invalid password for account "${data.username}"`);
    //alert('Password is invalid')
  }
  return data.username;
}

/**
 * Inserts values in the database.
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */

export async function register(data) {
  const password = await hash(data.password, salt);
  //throw error if user already exist
  const userExists =
    `SELECT count(id) AS count FROM accounts WHERE user="${data.username}";`;
  const records = await db.query(userExists);
  if (records[0].count) {
    throw new Error(`username "${data.username}" already exists`);
    //alert('Username already exists')
    //return false
  } else {
    const mySql =
      `INSERT INTO accounts(user, pass) VALUES("${data.username}", "${password}")`;
    console.log(mySql);
    await db.query(mySql);
    return true;
  }
}
