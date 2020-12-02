const { client, q } = require("./db");

const listTask = async function (request, response) {
	let result = await client.query(
		q.Map(
			q.Paginate(q.Documents(q.Collection("tasks"))),
			q.Lambda((x) => q.Get(x))
		)
	);

	return response.status(200).json(result);
};

module.exports = listTask;
