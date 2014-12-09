# Find-A-Lens Application Details

Find-A-Lens is a web application designed for photographers to find their next lens
purchase.

If you are a photographer, you know that good lenses are insanely expensive and often cost upwards of $2,000 or more.
Photographers research lenses to no end before buying, and while there are lots of decent reviews of lenses available
on the Internet, there really isn't anything out there to help walk you through the process of selecting a lens.


## Project Development Instructions
This application is based on AngularJS and NodeJS.
To run this application, you must install NodeJS.
`cd` into your desired directory and then `git clone` the repository.
After you clone the repository, you can install the project's dependencies.  To do so, run the following command:

     npm install

Doing so will not only install [NPM](https://www.npmjs.org/) development dependencies, but will also install [Bower](http://bower.io) production dependencies.
To add/remove dependencies you can modify the package.json file (development), and the bower.json file (production).
***

### Starting the local server

There are a couple different options to start a local server. You can run the application on your local machine by running the following command on Windows:

     server.bat

Or if you are on a Mac, you can start the local server by running the command:

     server.sh

If you have issues on a Mac running `server.sh` try the following:

    ./server.sh

After starting the local server, navigate your web browser to http://localhost:8000.

___Note:___
_When stopping the local server on a Windows machine, you will need to `cd ..` back to the main directory in order to execute any commands.
This happens because when stopping the server with `CTRL +c` it will leave you inside the **app/** directory.
If you are using a Mac, you will not need to do this.

Alternatively you can run a basic local server by running the following command:

    npm start

After starting this local server, navigate your web browser to http://localhost:8000/app.

***
### Compiling the SASS and other Scripts

CSS is handled through SASS. In order to compile your SASS/SCSS files, run the following command:

     grunt

This will compile the proper CSS files for the project.

***


### Development Technologies Additional Information

For more information on AngularJS please check out http://angularjs.org/

* [git](http://git-scm.com/)

* [bower](http://bower.io)

* [grunt](http://gruntjs.com/)

* [npm](https://www.npmjs.org/)

* [node](http://nodejs.org)

* [protractor](https://github.com/angular/protractor)

* [jasmine](http://jasmine.github.io)

* [karma](http://karma-runner.github.io)

* [travis](https://travis-ci.org/)

* [http-server](https://github.com/nodeapps/http-server)
