# TypeAcer: an hrsf80-mvp project 

## Tech Stack ##
- Client: React
- Server: Node.js with Express
- DB: MongoDB + Mongoose

## Todo List ##
### MVP ###
- [x] Shows a random text prompt from an API
- [x] Has a text box for user input to copy the prompt
- [x] After completing prompt, shows your wpm
- [x] Saves user's wpm with the specific prompt to a DB
- [x] Can reset page with a new quote to attempt
- [x] Updates wpm with new best
- [x] Shows you if you make a mistake
- [x] Handles single and double quotes in the quote string
- [x] Only passes clean quotes to client
- [x] Shows the record fastest wpm for that quote

### Advanced Content ###
- [x] Add reactstrap for styling
- [x] bugs: double spaces are not obvious
- [x] bugs: swearjar list reset
- [ ] Add a reset button
- [ ] Saves and shows you your most common errors
- [ ] Randomly chooses between existing quotes and new ones, defaults to old quotes if an unclean quote is found?
- [ ] Add keystrokes per minute
- [ ] Has a Flying Ace icon move across as you type
- [ ] Has user login
- [ ] Shows leaderboard of user wpm by prompt
- [ ] ~~bugs: enter key~~ not a bug, just counts as a wrong keystroke, can be deleted

## Setup ##
- `npm install`
- `npm run build`
- `mongod`
- `npm start`

Default quote API is from [Storm Consultancy](http://quotes.stormconsultancy.co.uk). 
Note: this is not a "clean" set of quotes, so npm package [swearjar](https://www.npmjs.com/package/swearjar) is used. 
Note 2: depending on your tastes, this may not be a fully inclusive list of profanity, see swearjar docs on editing the default list or providing your own.

## Press Release ##

### Heading ###
  > TypeAcer

### Sub-Heading ###
  > Helping you ace your typing and increase your words per minute.

### Summary ###
  > TypeAcer provides a fun, engaging opportunity for anyone to practice their typing. It's easy to start, and the bite sized sessions lets you flexibly fit it into your schedule. Each session provides you a random quote of text, which you copy while trying to minimize typing errors. At the end, TypeAcer will provide you with a speed and error summary.

### Problem ###
  >  Today's growing reliance on technology places a strong burden for people to be proficient in communicating and interacting with electronic interfaces, often with typing, whether on a computer or a mobile device. Faster devices mean the speed of your interaction is strongly dependent on your own typing pace.

### Solution ###
  > TypeAcer provides a fun, engaging opportunity for anyone to practice their typing, on any device. 

### Quote from You ###
  > "TypeAcer is the Ace up your sleeve in being a faster typist!" - Typy McTypeFace, CEO

### How to Get Started ###
  > TypeAcer is ready to go when you are, just visit the site, click the start button, and type away!

### Customer Quote ###
  > "I used to give up typing because I was too slow, but now I'm so fast, I've reached the theoretical speed limits of USB!" - Ace Typer

### Closing and Call to Action ###
  > Click [here](127.0.0.1/typeacer) to get started! For other challenges, check out our other products: 
  > TypeSpacer: A typing experience that's out of this world!
  > TypeLaser: Hone your typing with laser precision!
