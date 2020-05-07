const express = require('express');
const routesV2 = require('./routes-v2');

let app = express();

module.exports = app;

try {
	routesV2.routesConfig(app);
    const port = 5000;

    app.listen(port, function () {
        console.log('Server listening on port ' + port);
    });
} catch(error) {
    console.log(error);
}