www.brewerydb.com

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
