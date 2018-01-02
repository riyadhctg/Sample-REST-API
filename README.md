# Sample-REST-API
A sample node.js Express application to demonstrate REST API capabilities

<h2>Initializing an Express app:</h2>
<ul>
<li>Install Node.js https://nodejs.org/en/</li>
<li>Download and initialize MongoDB https://www.mongodb.com/</li>
<li>Install mongoose to work with MongoDB http://mongoosejs.com/
<li>Install Express https://expressjs.com/</li>
<li>Install Express Generator https://expressjs.com/en/starter/generator.html</li>
<li>Follow the instruction on this page to generate an express project and when creating a express project use '-e' in the option to use EJS engine (default is Jade)</li>
<li>This will generate a bunch of files including app.js and index.ejs</li>
 </ul>
 
<h2>Developing REST API:</h2>
<ul>
<li>I loaded some JSON data (source: https://en.wikipedia.org/wiki/Timeline_of_scientific_discoveries) into MongoDB and used Mongoose to connect, model, and query the data (see models/discovery.js)</li>
<li>The REST API functionalities can be found in routes/api.js</li>
<li>The front end is React.js based that allows users to input a year and look for scientific discoveries around that period</li>
</ul>
 
Please note that this is an experimental application.
