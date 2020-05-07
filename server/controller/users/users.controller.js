//used to get all users
let users = [
	{id: 1, name: 'Tayyab'}
];

exports.getUsers = (req, res) => {
    console.log(users);
	res.send(users);
};

//used to add a user
exports.addUser = (req, res) => {
	if(req.body && req.body.id && req.body.name) {
		let user = {
			id: req.body.id,
			name: req.body.name
		}
		users.push(user);
		console.log('in here adding users');
		res.send('good one');
	}
	else res.send('error: please provide user id and name');
};