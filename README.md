# meteor-geochart
###Geochart implementation in Meteor
Geochart changes reactively when slider changes. Data from MongoDB. Implemented with official Google Charts Api.

###Images:
  !["image geochart demo" geochart](https://github.com/jkarlosb/meteor-geochart/blob/master/public/img/demo1.png)
  !["image geochart demo2" "geochart meteor"](https://github.com/jkarlosb/meteor-geochart/blob/master/public/img/demo2.png)

###Google Api Key
Api key from Google is required (https://developers.google.com/maps/documentation/javascript/get-api-key). 
You can put it in imports/ui/components/geochart/geochart.js file, inside myApiKey var, e.g.:
  ```
  const myApiKey = "AIzsSyD4cYuf8s9GzKw34erDY8in8xwTtE"; // Google Api Key
  ```

###Get started
    meteor npm install
    meteor
    Go to http://localhost:3000
