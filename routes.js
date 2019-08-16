const url = require('url');
const fs = require('fs');

// Generic method to render html on click of each routes
const renderHtml = (path, response) => {
    fs.readFile(path, null, (error, data) => {
        if (error) {
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    // method to handle request and response
    handleRequest: (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        // extracted day from the route pathname
        let path = url.parse(request.url).pathname.split('/')[1];
        
        const daysArr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        
        if ('' === path) {
            // homepage
            renderHtml('./index.html', response);
        } else if (daysArr.indexOf(path) !== -1) {
            // view when any route is clicked
            renderHtml('./current-time.html', response);
        } else {
            // handling of routes that are not expected
            response.writeHead(404);
            response.write('Route not found');
            response.end();
        }
    }
}