/** @module content.js */

import { db } from "./db.js";

/**
 * Get data from add content form.
 * @param {string} data
 * @returns {object} affetedRows: value, lastInsertId: value
 */
export async function addContent(data) {
  console.log("addContent()");
  data.fields.username = data.username;
  data.files[0].username = data.username;
  data.fields.image = await saveImage(data.files[0]);
  await addContentDetails(data.fields);
}
// export async function addContent(data) {
// console.log("addContent()");
// data.fields.username = data.username; // string
// //data.files.username = data.username; // string
// data.fields.image = await saveImage(data.files[0]);
// //console.log(data.fields)
// //console.log(data.fields.username)
// const id = await addContentDetails(data.fields);
// }

/**
Get data from add content form.
@param {string} username
@param {string} title
@param {string} content
@param {string} image
@returns {object} affetedRows: value, lastInsertId: value
*/
//takes data from the Add form and inserts data into database with a query
async function addContentDetails(data) {
  console.log(data);
  let mySql = `SELECT id FROM accounts WHERE user = "${data.username}"`;
  let result = await db.query(mySql);
  const authorid = result[0].id;
  const now = new Date().toISOString();
  const dateTime = now.slice(0, 19).replace("T", " ");
  mySql = `INSERT INTO contents(authorid, title, content, image, added)\
     VALUES(${authorid}, "${data.title}", "${data.content}", "${data.image}", "${dateTime}")`;
  mySql = mySql.replace('""', "NULL");
  result = await db.query(mySql);
  return result.lastInsertId;
}

// export async function addContentDetails(data) {
// console.log(data);
// let mySql = SELECT id FROM accounts WHERE user = "${data.username}";
// let result = await db.query(mySql);
// const authorid = result[0].id;
// const now = new Date().toISOString();
// const dateTime = now.slice(0, 19).replace("T", " ");
// mySql = INSERT INTO contents(authorid, title, content, image, added)\ VALUES(${authorid}, "${data.title}", "${data.content}", "${data.image}", "${dateTime}");
// mySql = mySql.replace('""’, “NULL”);
// result = await db.query(mySql);
// console.log(“after query”)
// console.log(result)
// return true
// //return result.lastInsertId;
// }

// save the image
// add the record to content table
// renames the the image and saves it into
// the public upload folder
/**
 * Get data from add content form.
 * @param {string} file
 * @returns {string} new file name
 */
async function saveImage(file) {
  let filename = "";
  if (file.contentType !== "application/octet-stream") {
    const ext = file.filename.split(".").pop();
    const now = Date.now();
    filename = `${file.username}-${now}.${ext}`;
    await Deno.rename(
      file.filename,
      `${Deno.cwd()}/public/uploads/${filename}`,
    );
  }
  return filename;
}
