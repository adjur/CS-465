# CS 465 Full Stack Development Journal Reflection
---
## Architecture

In this project, I used multiple types of frontend development. The customer-facing side used Express with HTML, CSS, JavaScript, and Handlebars templates to render pages from the server. This is a traditional multi-page web application where each page request loads new content from the server.

The administrator side used Angular as a Single Page Application (SPA). Angular allowed the site to update content dynamically without full page reloads. Components, routing, and services made the administrator interface faster and more interactive.

The backend used MongoDB because it is a NoSQL database that stores data in flexible JSON-like documents. This worked well for trip data because travel packages can have different fields and can grow over time without requiring strict relational tables.

---

## Functionality

JSON is a text-based format used to store and transfer data, while JavaScript is a programming language used to create application logic. JSON helped connect the frontend and backend because the Express API returned trip data as JSON, and Angular used that data to display information on the page.

During development, I refactored code by moving repeated logic into Angular services and reusable components. For example, trip data requests were handled in a service instead of repeated inside components. Trip cards were also separated into reusable UI components. This improved organization, reduced duplicate code, and made updates easier.

---

## Testing

Testing involved verifying API endpoints and request methods such as GET, POST, and PUT. GET was used to retrieve trip data, POST was used for login and adding records, and PUT was used for editing trips.

I used Postman and browser testing to confirm that endpoints responded correctly. Security testing added another layer because protected admin routes required a valid JSON Web Token (JWT). This showed the importance of authentication and making sure only authorized users could update trip data.

---

## Reflection

This course helped me move closer to my professional goals by giving me hands-on experience building a real full stack application. I gained practical experience with Angular, Express, Node.js, MongoDB, routing, API development, authentication, and debugging.

I also improved my problem-solving skills by troubleshooting routing issues, API communication, and front-end rendering problems. These skills make me a stronger and more marketable candidate for software development and web development roles because I now understand how multiple technologies work together in a full stack environment.
