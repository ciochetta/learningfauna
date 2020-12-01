const { client, q } = require("./db");

const getTask = async function (request, response) {
	let result = await client.query(
		q.Get(q.Ref(q.Collection("tasks"), request.params.id))
	);

	return response.status(200).json(result);
};

module.exports = getTask;
