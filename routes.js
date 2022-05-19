/* routes.js */

import { Router } from "https://deno.land/x/oak@v6.5.1/mod.ts";
import { Handlebars } from "https://deno.land/x/handlebars/mod.ts";
// import { upload } from 'https://cdn.deno.land/oak_upload_middleware/versions/v2/raw/mod.ts'
// import { parse } from 'https://deno.land/std/flags/mod.ts'

import { login, register } from "./modules/accounts.js";
import { addContent } from "./modules/content.js";
import { db } from "./modules/db.js";

const handle = new Handlebars();

const router = new Router();

// the home routes defined here
router.get("/", async (context) => {
  const authorised = context.cookies.get("authorised");
  const acceptCookie = context.cookies.get("cookie-accept");
  const isTeacher = context.cookies.get("isTeacher");
  if (authorised === undefined) context.response.redirect("/login");
  context.response.redirect("/home");
  //   const content = await getContent();
  //   title = Object.values(content[2]).pop()
  //   console.log(title);
  const data = { authorised, acceptCookie, isTeacher }; //{ authorised, content, cookieAccept }
  const body = await handle.renderView("home", data);
  context.response.body = body;
});

// router to allow user to accept the website cookies
// saves new cookie with value true
router.post("/acceptCookie", (context) => {
  context.cookies.set("cookie-accept", "true");
  context.response.redirect("/");
});

// router for accessing the home screen
router.get("/home", async (context) => {
  const authorised = context.cookies.get("authorised"); // check if cookies are set authorised
  const acceptCookie = context.cookies.get("cookie-accept");
  const isTeacher = context.cookies.get("isTeacher");
  if (authorised === undefined) context.response.redirect("/login"); // not authorised, redirect to login page
  const data = { authorised, acceptCookie, isTeacher };
  const body = await handle.renderView("home", data);
  context.response.body = body;
});

router.get("/register", async (context) => {
  const path = "register";
  const data = { undefined, path };
  const body = await handle.renderView("register", data);
  context.response.body = body;
});

router.post("/register", async (context) => {
  console.log("POST /register");
  const body = context.request.body({ type: "form" });
  const value = await body.value;
  const obj = Object.fromEntries(value);
  console.log(obj);
  try {
    await register(obj);
    context.response.redirect("/login"); // successful regiter redirects to login page
  } catch (err) {
    console.log(err);
    context.response.redirect("/register");
  }
});

router.get("/logout", (context) => {
  context.cookies.delete("authorised");
  context.cookies.delete("isTeacher");
  context.cookies.delete("acceptCookie");
  context.response.redirect("/");
});

router.get("/login", async (context) => {
  const body = await handle.renderView("login");
  context.response.body = body;
});

router.post("/login", async (context) => {
  console.log("POST /login");
  const body = context.request.body({ type: "form" });
  const value = await body.value;
  const obj = Object.fromEntries(value);
  //console.log(obj);
  try {
    const username = await login(obj);
    context.cookies.set("authorised", username);

    const mySql = `SELECT user_type FROM accounts WHERE user="${username}";`;
    const userTypeObj = await db.query(mySql);
    if (Object.values(userTypeObj[0]).pop() != "teacher") { // returns an array of only object value
      context.cookies.set("isTeacher", "false");
    } else {
      context.cookies.set("isTeacher", "true");
    }

    context.response.redirect("/home"); // login redirect user to home page
  } catch (err) {
    console.log(err);
    context.response.redirect("/login");
  }
});

// router for redirecting user to Add new content page
router.get("/add", async (context) => {
  console.log("GET /add");
  const path = "add"; // variable pass in the current path to renderview
  const authorised = context.cookies.get("authorised");
  const acceptCookie = context.cookies.get("cookie-accept");
  const isTeacher = context.cookies.get("isTeacher");
  if (authorised === undefined) context.response.redirect("/login");
  const data = { authorised, path, acceptCookie, isTeacher };
  if (isTeacher === "false") {
    context.response.redirect("/home");
  } else {
    const body = await handle.renderView("add", data);
    context.response.body = body;
  }
});

// router to capture the date and post into the database
router.post("/add", async (context) => {
  console.log("POST /add");
  const body = await context.request.body({ type: "form-data" });
  const data = await body.value.read();
  data.username = context.cookies.get("authorised");
  await addContent(data);
  context.response.redirect("/");
});

// router to redirect to view page from the clicking on learning material
router.get("/view", async (context) => {
  console.log("GET  /view");
  const path = "view";
  const authorised = context.cookies.get("authorised");
  const acceptCookie = context.cookies.get("cookie-accept");
  if (authorised === undefined) context.response.redirect("/home");
  const data = { authorised, path, acceptCookie };
  const body = await handle.renderView("view", data);
  context.response.body = body;
});

// router to redirect to cookie-policy page
router.get("/cookie-policy", async (context) => {
  console.log("GET  /cookie-policy");
  const path = "cookie-policy";
  const authorised = context.cookies.get("authorised");
  const acceptCookie = context.cookies.get("cookie-accept");
  if (authorised === undefined) context.response.redirect("/home");
  const data = { authorised, path, acceptCookie };
  const body = await handle.renderView("cookie-policy", data);
  context.response.body = body;
});

// router to redirect to privacy-policy page
router.get("/privacy-policy", async (context) => {
  console.log("GET  /privacy-policy");
  const path = "privacy-policy";
  const authorised = context.cookies.get("authorised");
  const acceptCookie = context.cookies.get("cookie-accept");
  if (authorised === undefined) context.response.redirect("/home");
  const data = { authorised, path, acceptCookie };
  const body = await handle.renderView("privacy-policy", data);
  context.response.body = body;
});

// router to redirect to terms-of-use page
router.get("/terms-of-use", async (context) => {
  console.log("GET  /terms-of-use");
  const path = "terms-of-use";
  const authorised = context.cookies.get("authorised");
  const acceptCookie = context.cookies.get("cookie-accept");
  if (authorised === undefined) context.response.redirect("/home");
  const data = { authorised, path, acceptCookie };
  const body = await handle.renderView("terms-of-use", data);
  context.response.body = body;
});

export default router;
