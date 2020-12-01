const { client, q } = require("./db");

const deleteTask = async function (request, response) {
	if (request.params.id === undefined) {
		return response.status(400).json({ Message: "No id was sent in the url" });
	}

	let result = await client.query(
		q.Delete(q.Ref(q.Collection("tasks"), request.params.id))
	);

	return response.status(200).json(result);
};

module.exports = deleteTask;
