const { client, q } = require("./db");

const insertTask = async function (request, response) {
	if (request.body === undefined) {
		return response.status(400).json({ Message: "Invalid message body" });
	}

	if (request.body.task === undefined) {
		return response.status(400).json({ Message: "Task is undefined" });
	}

	if (request.body.task.description === undefined) {
		return response
			.status(400)
			.json({ Message: "Task doesn't have a description" });
	}

	let task = {
		description: request.body.task.description,
		isFinished: false,
	};

	let result = await client.query(
		q.Create(q.Collection("tasks"), { data: task })
	);

	return response.status(200).json(result);
};

module.exports = insertTask;
