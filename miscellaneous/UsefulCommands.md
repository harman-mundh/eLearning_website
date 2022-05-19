# Run website
```
deno run --allow-all --unstable index.js
```
# Access to mysql:
```
mysql -u root -p website
```
# Use Password:
```
p455w0rd
```
# Testing
```
deno test --unstable
```

```
deno test --coverage=lcov --unstable --allow-env --allow-net
```

```
deno coverage lcov
```

```
deno coverage lcov --lcov > cov_profile.lcov
```

```
genhtml -o coverage cov_profile.lcov
```

```
deno test --allow-all --unstable --import-map './test.json'
```

# Heroku
```
heroku local
```
```
heroku login -i
```

/* unused code 
export async function getContents() {
  const mySql = "SELECT * FROM contents";
  const content = await db.query(mySql);
  return content;
}

export async function moveRenameFile(filename, prefix) {
	const timestamp = Date.now()
	const ext = filename.split('.').pop()
	const newname = `${prefix}-${timestamp}.${ext}`
	await Deno.rename(filename, `images/${newname}`)
	return newname
}

Deno.test('correctly moves and renames a file', async () => {
	// arrange
	const source = '/home/codio/workspace/uploads/tmp/coventry.jpg'
	// act
	const filename = await moveRenameFile(source, 'doej')
	const found = await exists(`images/${filename}`)
	assertEquals(found, true, 'file not moved and renamed')
	await Deno.rename(`images/${filename}`, 'tmp/coventry.jpg')
})
*/

/* 
/**
 * Get data from add content form.
 * @param {string} username
 * @param {string} title
 * @param {string} content
 * @param {string} image
 * @returns {object} affetedRows: value, lastInsertId: value 
 */

takes data from the Add form and inserts data into database with a query
export async function addContentDetails(data) {
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
  console.log("after query")
  console.log(result)
  return true
  //return result.lastInsertId;
}
*/

/*
  console.log("addContent()");
  data.fields.username = data.username; // string
  //data.files.username = data.username; // string
  data.fields.image = await saveImage(data.files[0]);
  //console.log(data.fields)
  //console.log(data.fields.username)
  const id = await addContentDetails(data.fields);
}
*/