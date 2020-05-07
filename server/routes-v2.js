const UsersController = require('./controller/users/users.controller');
const HobbiesController = require('./controller/hobbies/hobbies.controller');

exports.routesConfig = function (app) {
    app.get('/hobbies', [
        HobbiesController.getHobbies
    ]);
	app.post('/hobbies', [
        HobbiesController.addHobby
    ]);
	app.patch('/hobbies/:hobby_id', [
        HobbiesController.updateHobby
    ]);
	
    app.get('/users', [
        UsersController.getUsers
    ]);
	app.post('/users', [
        UsersController.addUser
    ]);
};