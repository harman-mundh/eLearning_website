/* main.js */

// deno-lint-ignore-file

import { file2DataURI } from "./util.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  document.querySelector('input[type="file"]').addEventListener(
    "change",
    (event) => ShowImg(event),
  );
});

async function ShowImg(event) {
  console.log("ADDED IMAGE");
  const files = event.target.files;
  const file = files[0];
  if (file) {
    const data = await file2DataURI(file);
    const img = document.querySelector("form img");
    img.src = data;
  }
}

// rendering markdown
let timeout;
const delay = 1000;

const converter = new showdown.Converter({
  "tables": true,
  "tasklists": true,
  "strikethrough": true,
});

document.querySelector("textarea").addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    document.querySelector("section").innerHTML = converter.makeHtml(
      document.querySelector("textarea").value,
    );
  }, delay);
});
