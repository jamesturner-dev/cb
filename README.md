## What's this all about then?

##### I wanted to create a full stack app as a quick resume piece. More of this is how I do things rather than _look at this thing_. I had an idea about tracking all the links from my various enterprises. I then thought that I really should use like a short url type scheme. And maybe a directory of those links, oh, and lets make it multi-user!

I also wanted to try and use <script setup> </script> and the Composition API all the way through instead of relying on the options API when I didn't know how to do things. In the same vein I wanted to give up my Axios crutch and finally, fully, give into fetch...

### TLDR;

This shows how I do full stack at this point.

#### Tools / Tech

- [Node / Express](https://expressjs.com/)
- [Vue3](https://vuejs.org/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### _config

You need to rename the _config file config and fill it out with your info.  If you have done this kinda thing before this should make sense to you? This is the first iteration of this config idea, so bare with me as I will error on the side of caution.

I'm currently working on the edit link section so if it's wonky, it's under construction.

Once that is done change into each directory ( front end and backend ) run npm install in each, and then npm run dev to start them each up.  I will figure out something less clumsy as time permits.

### TODO's

- decide how to do the tokens.  I don't want to use local storage, use the cookie.

- ~~Add Submit Link form~~.
- ~~Remove all vestiges of axios~~.

- Make sure I'm using the composition API <script setup> throughout.

- Ensure that all fetch calls are standarized.

- ~~Add search feature - I have it written, find it and impliment~~.

- Figure out that damn current link in the menu, I want to use an object _and_ I want to get current route. It works sometimes but there is a SPA deal issue?

- ~~create some homepage content. I think that I'll add directory for now~~.

- ~~Fix Tags link / endpoint. Maybe make a new route instead of using parms on links?~~

- make components out of the files that are still large.

- Finish the edit link admin component.

- look up the count records the right way...  tbh it's faster this way :/

- ~~Finalize the route for the short link. As of now it's /cb/:cb and can be improved~~

- shortLink lookup / redirect function. How much tracking beyond click count?

- Make Darkmode extend 100% vertical.

- ~~make the darkmode button a toggle.~~

- add custom classes where appropriate.