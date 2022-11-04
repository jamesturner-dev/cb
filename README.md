## THIS IS NOT READY FOR THE WORLD

##### I wanted to create a full stack app as a quick resume piece. More of this is how I do things rather than _look at this thing_. I had an idea about tracking all the links from my various enterprises. I then thought that I really should use like a short url type scheme. And maybe share a directory of those links, oh, and lets make it multi-user!

I also wanted to try and use <script setup> </script> and the Composition API all the way through instead of relying on the options API when I didn't know how to do things. In the same vein I wanted to give up my Axios crutch and finally, fully give into fetch...

### TLDR;

This is in no way, shape, or form finished software. It will be done in due time, however is does show how I do full stack at this point.

#### Tools / Tech

- [Node / Express](https://expressjs.com/)
- [Vue3](https://vuejs.org/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### This will not run as is from this repository

It needs the config file for connecting to the db, etc. I will figure out what the best practice is for including dummy file(s). Uploading now because I almost broke it without a backup...

### TODO's

- Add Submit Link form.

- Add search feature - I have it written, find it and impliment.

- Figure out that damn current link in the menu, I want to use an object _and_ I want to get current route

- Finalize the route for the short link. As of now it's /cb/:cb and can be improved

- create some homepage content. I think that I'll add directory for now.

- Fix Tags link / endpoint. Maybe make a new route instead of using parms on links?
