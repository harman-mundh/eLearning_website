/* content.test.js */

import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { addContent } from "./contents.stub.js";
//import { db } from "../modules/db.js";
//testing addContent(data)
Deno.test({
  name: "adding content into the database  ",
  async fn() {
    const title = "new title";
    const content = "some content";
    const user = "teacher1";
    const image = "cookie.png";
    console.log("\n");
    const awaitData = [await title, await content, await user, await image];

    console.log(awaitData);

    const Data = {
      title: awaitData[0],
      content: awaitData[1],
      username: awaitData[2],
      image: awaitData[3],
    };

    console.log(Data);

    const TestAddContent = await addContent(Data);

    assertEquals(TestAddContent, true, "Adding new content failed");
    //await db.query(`DELETE FROM contents WHERE title = "${data.title}" `);
  },
  sanitizeResources: false,
  sanitizeOps: false,
});
