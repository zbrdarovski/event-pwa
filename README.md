# E-vent Progressive Web Application

E-vent is a progressive web application to manage news about events. The app implements:
- data cache
- image lazy loading
- camera detection
- voice commands
- keyboard commands

## Technology

<p align="left">
  <img alt="HTML5" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" style="padding: 5px;" />
  <img alt="CSS3" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" style="padding: 5px;" />
  <img alt="JavaScript" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" style="padding: 5px;" />
  <img alt="MongoDB" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style="padding: 5px;" />
</p>

## Project Structure

`./event-pwa/public/index.html` - main html file that loads the service worker and navigation

`./event-pwa/public/manager.html` `./event-pwa/public/manager.css` - frontend page to manage news and its design

`./event-pwa/public/news.html` `./event-pwa/public/news.css` - frontend page that fetches, displays and sorts news and its design

`./event-pwa/public/manifest.json` - holds basic information about the application

`./event-pwa/routes/news.js` - api that serves crud operations to manage yoga news

`server.js` - main backend file that runs the news api and connects to a Mongo database

`service-worker.js` - lets the app live up to the users' expectations

## License
This project is not licensed for public use. The code is protected by copyright law.  
Viewing is permitted for evaluation purposes only. Copying, modifying, or distributing the code is strictly prohibited.
