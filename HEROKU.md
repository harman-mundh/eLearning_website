Link to live server: 
https://git.heroku.com/git-elearning-website.git

errors: 
2022-04-11T16:50:49.440333+00:00 app[web.1]: error: TS18022 [ERROR]: A method cannot be named with a private identifier.
2022-04-11T16:50:49.440349+00:00 app[web.1]: #tryGrowByReslice(n: number) {
2022-04-11T16:50:49.440349+00:00 app[web.1]:   ~~~~~~~~~~~~~~~~~
2022-04-11T16:50:49.440350+00:00 app[web.1]: at https://deno.land/std@0.104.0/io/buffer.ts:85:3
2022-04-11T16:50:49.440351+00:00 app[web.1]: 
2022-04-11T16:50:49.440352+00:00 app[web.1]: TS18022 [ERROR]: A method cannot be named with a private identifier.
2022-04-11T16:50:49.440353+00:00 app[web.1]: #reslice(len: number) {
2022-04-11T16:50:49.440353+00:00 app[web.1]:   ~~~~~~~~
2022-04-11T16:50:49.440353+00:00 app[web.1]: at https://deno.land/std@0.104.0/io/buffer.ts:94:3
2022-04-11T16:50:49.440354+00:00 app[web.1]: 
2022-04-11T16:50:49.440354+00:00 app[web.1]: TS18022 [ERROR]: A method cannot be named with a private identifier.
2022-04-11T16:50:49.440355+00:00 app[web.1]: #grow(n: number) {
2022-04-11T16:50:49.440355+00:00 app[web.1]:   ~~~~~
2022-04-11T16:50:49.440355+00:00 app[web.1]: at https://deno.land/std@0.104.0/io/buffer.ts:141:3
2022-04-11T16:50:49.440355+00:00 app[web.1]: 
2022-04-11T16:50:49.440356+00:00 app[web.1]: TS18022 [ERROR]: A method cannot be named with a private identifier.
2022-04-11T16:50:49.440356+00:00 app[web.1]: #unloadCallback() {
2022-04-11T16:50:49.440356+00:00 app[web.1]:   ~~~~~~~~~~~~~~~
2022-04-11T16:50:49.440357+00:00 app[web.1]: at https://deno.land/std@0.104.0/log/handlers.ts:105:3
2022-04-11T16:50:49.440357+00:00 app[web.1]: 
2022-04-11T16:50:49.440357+00:00 app[web.1]: TS2339 [ERROR]: Property 'hasOwn' does not exist on type 'ObjectConstructor'.
2022-04-11T16:50:49.440357+00:00 app[web.1]: const { hasOwn } = Object;
2022-04-11T16:50:49.440358+00:00 app[web.1]:         ~~~~~~
2022-04-11T16:50:49.440358+00:00 app[web.1]: at https://deno.land/std@0.134.0/flags/mod.ts:69:9
2022-04-11T16:50:49.440358+00:00 app[web.1]: 
2022-04-11T16:50:49.440358+00:00 app[web.1]: TS2339 [ERROR]: Property 'cause' does not exist on type 'Error & { root: string; }'.
2022-04-11T16:50:49.440359+00:00 app[web.1]: e.cause = err instanceof Error ? err.cause : undefined;
2022-04-11T16:50:49.440360+00:00 app[web.1]:     ~~~~~
2022-04-11T16:50:49.440360+00:00 app[web.1]: at https://deno.land/std@0.110.0/fs/walk.ts:71:5
2022-04-11T16:50:49.440360+00:00 app[web.1]: 
2022-04-11T16:50:49.440361+00:00 app[web.1]: TS2339 [ERROR]: Property 'cause' does not exist on type 'Error'.
2022-04-11T16:50:49.440362+00:00 app[web.1]: e.cause = err instanceof Error ? err.cause : undefined;
2022-04-11T16:50:49.440362+00:00 app[web.1]:                                        ~~~~~
2022-04-11T16:50:49.440362+00:00 app[web.1]: at https://deno.land/std@0.110.0/fs/walk.ts:71:40
2022-04-11T16:50:49.440362+00:00 app[web.1]: 
2022-04-11T16:50:49.440363+00:00 app[web.1]: Found 7 errors.
2022-04-11T16:50:49.627248+00:00 heroku[web.1]: Process exited with status 1
2022-04-11T16:50:49.797103+00:00 heroku[web.1]: State changed from starting to crashed