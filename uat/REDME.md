to run test file use:
```
deno test --allow-all --unstable --import-map './test.json'
```

I have isolated the content.js addContent() function in content.stub.js combained
addContentDetails() in addContent(), therefore I have a single function to run and 
test if data it correctly added into the database.