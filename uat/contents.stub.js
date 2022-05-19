/** @module content.js */

import { db } from "../modules/db.js";

/**
 * Get data from add content form.
 * @param {string} data
 * @returns {object} affetedRows: value, lastInsertId: value
 */
export async function addContent(data) {
  console.log(data);
  let mySql = `SELECT id FROM accounts WHERE user = "${data.username}"`;
  let result = await db.query(mySql);
  const authorid = result[0].id;
  const now = new Date().toISOString();
  //data.image = await saveImage(data.image);
  const dateTime = now.slice(0, 19).replace("T", " ");
  mySql = `INSERT INTO contents(authorid, title, content, image, added)\
     VALUES(${authorid}, "${data.title}", "${data.content}", "${data.image}", "${dateTime}")`;
  mySql = mySql.replace('""', "NULL");
  result = await db.query(mySql);
  console.log("after query");
  console.log(result);
  return true;
  //data.fields.username = data.username; // string
  //data.files.username = data.username; // string

  //console.log(data.fields)
  //console.log(data.fields.username)
  //const id = await addContentDetails(data.fields);
}
