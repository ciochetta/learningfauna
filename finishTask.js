const { client, q } = require("./db");

const finishTask = async function (request, response) {
	if (request.params.id === undefined) {
		return response.status(400).json({ Message: "No id was sent in the url" });
	}

	let result = await client.query(
		q.Update(q.Ref(q.Collection("tasks"), request.params.id), {
			data: {
				isFinished: true,
			},
		})
	);

	return response.status(200).json(result);
};

module.exports = finishTask;
