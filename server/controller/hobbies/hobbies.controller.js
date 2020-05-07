//used to get all hobbies
let hobbies = [
	{id: 1, hobby: 'Watcing TV', year: 2010, passion: 'low'}
];

exports.getHobbies = (req, res) => {
    console.log(hobbies);
	res.send(hobbies);
};

//used to add a hobby
exports.addHobby = (req, res) => {
	if(req.body && req.body.id && req.body.hobby && req.body.year && req.body.passion) {
		let obj = {
			id: req.body.id,
			hobby: req.body.name,
			passion: req.body.passion,
			year: req.body.year
		}
		hobbies.push(obj);
		console.log('in here adding users');
		res.send(obj);
	}
	else res.send('error: please provide all info');
};

//used to update a hobby
exports.updateHobby = (req, res) => {
	let update;
	for(let i=0;i<hobbies.length;i++) {
		if(hobbies[i].id === req.params.id) {
			if(req.body.hobby) hobbies[i].hobby = req.body.hobby;
			if(req.body.year) hobbies[i].year = req.body.year;
			if(req.body.passion) hobbies[i].passion = req.body.passion;
			update = hobbies[i];
			break; //Stop this loop, we found it!
		}
	}
	console.log(hobbies[i]);
	res.send(hobbies[i]);
};