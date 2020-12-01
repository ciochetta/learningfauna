const dotenv = require("dotenv");
dotenv.config();

const faunadb = require("faunadb"),
	q = faunadb.query;

const client = new faunadb.Client({
	secret: process.env.FAUNA_KEY,
});

const getTask = async function (request, response) {
	let result = await client.query(
		q.Get(q.Ref(q.Collection("tasks"), request.params.id))
	);

	return response.status(200).json(result);
};

module.exports = getTask;
