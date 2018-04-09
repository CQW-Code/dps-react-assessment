www.brewerydb.com

To say the least I feel like I didn't do super well with this as I kind of got stuck on one bit and a bit..obsessed on it too, though I did do other smallish things in the app. Did succeed a little in actually getting the cards to display albeit with no scintilating beers to gaze at- AND it seemed like it did iterate server side pagination with 5 showing up rather than one.
  I do wonder if I should have just done a UL/LI format.  Got ambitious...
  
**April 7, 2018 11:00AM-1:10P**
**2:03PM-9:26PM** *I'm missing Walking Dead!*
**back to it at 10:45PM end Midnight**

  able to iterate through json object!
  and cards display. But the data is still 
  not being translated to the cards...

  Never got to pagination though I did see the server side showing changes when I added page=10&per_page=5 etc. Client side stayed the same 5 as I was never near figuring that out (but did reading on it).  Did learn a few different things along the way regarding arrays and Objects- specifically trying to iterate over OBJECTS inside an ARRAY aka [ {ID: 1, name: Ducky, favecolor: green}, {ID:2, name: Heineken, favecolor: red}....]

**10:39PM-11:27PM and just a wee bit more until 12:50AM**
 -added a console log in componentDidMount- it shows the data, both ALL beers then after I added param of how many, saw 50 beers in my console.
 The problem is making them visible on my app.
**8:15PM-10:35P**
 -progress..a little.  I can see that the connection is being made successfully (200 OK) to the endpoint for both beers and breweries on my terminal though I'm not sure what Connection: "Close" means.. feels like it isn't open for some reason.
   -pages viewable-- with Zero errors! Alas nowhere near pagination yet or even displaying the beers or breweries :(.

   #ONWARDS!!!#

**April 7, 2018 Approx 2:15-6:30P**
  still having a lot of issues with API, axios and GET- It shows as 200 ok in the Network console but getting error "No 'Access-Control-Origin' header is present on the requested resource...." so no access... also a 404. I'm sure I'm overthinking it; and likely wrong request info in the componentDidMount function.
     To that end I put a test card in the Beers component so I know that works! 

**Apri 7, 2018 11:38 AM-1:15PM**
  - Having big issues with trying to connect to brewerydb.com/api/beers; it won't let me! I can view it in Postman (funny.. I had the same problem with the DPL products one weeks ago)
**April 6, 2018 2:20 AM-3:53 AM**
  - Display finally works- Route path component had an S on the end of 'component' (flashbacks of the tiny byte that threw my Orders Form print out way off).
  - Still can't get the beers to display- don't think I'm getting them correctly in  the axios GET call.
  ---ZZzzzzz


**April 6, 2018 8:45P-12:15AM** 
  - bit of a late start. 
  - Postman behaving now.
  -break time; I think I have the API call right but nothing is rendering or displaying. One big ole black screen as I added a nav button to hop to the /beers page.  Wondering if I should try separate first...

  **April 6, 2018. 1 minute-**  quick change to this file, forgot to edit something.

**April 5, 2018 7:45P - 11:00P**
-- **DONE**- .env file
-- **DONE**- forked!  Do I need to do upstream to sync with DPS?
--**DONE** Beers component added but bare

-- Having issues with Postman and trying to view brewerydb... Not getting anything back at all. 
**Resolved- finally figured it out!**
-- also cannot get foreman start to work- getting error 'sh : react-scripts: command not found'  exit code 127
    googling as to why.

NEED TO DO
-- Axios, fetch--> GET first 50 beers
   /api/all_beers
    **Can do this in postman, does that count?**
   Ditto for first 50 breweries 
   /api/all_breweries

  * **The Webpack server and API server for the project can be run via `bundle exec foreman start`**.
