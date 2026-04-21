# CS 465 Full Stack Development
## Architecture

For the frontend, there were several different frontend development frameworks. The frontend facing the customer utilized Express together with HTML, CSS, JavaScript, and Handlebars template engine to display dynamic pages received from the server. In this case, we have a conventional multi-page application since every page request retrieves new data from the server.

The administrator side leveraged the use of Angular to build an SPA. Angular facilitated dynamic updates of content without reloading the whole page. Utilization of components, routing, and services helped in increasing the speed of operations on the administrative part of the website.

The backend was based on MongoDB due to its nature as a NoSQL database storing information in JSON-like format documents. MongoDB was suitable for storing trip data since trips could be extended and had different sets of data.

## Functionality

JSON is a text format designed to transmit data, whereas JavaScript is a programming language which enables the creation of the application logic. JSON was helpful in linking the front and back ends since the Express API provided trip data in JSON form and Angular made use of it to provide information in the browser.

While developing the web application, I optimized my code by refactoring some pieces of code to put them in Angular services and components. For instance, fetching data about trips was performed in a service rather than having it implemented in multiple components. Trip cards were converted into reusable components as well.

## Testing

This included testing API end points and different types of requests like GET, POST, and PUT. GET requests were used for fetching trip details, POST requests were used for login and for creating new records, and PUT requests were used for updating trips.

Postman and browser testing helped in ensuring that there are no errors with the end points. Security testing was an additional dimension due to the protection of admin end points which needed JSON Web Tokens (JWT).

## Reflection

The lessons learnt from this course helped me come a step closer towards achieving my career objectives through experience of developing an application with full stack technology. I acquired knowledge on using Angular, Express, Node.js, MongoDB, routing, APIs, authentication, and debugging in practical terms.

In addition, I enhanced my abilities of solving problems related to routing problems, communication within APIs, and front-end rendering. All these factors make me better placed to fit into a software developer or web developer position.
