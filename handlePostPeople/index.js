const peopleModel = dynamoose.model("people", schema);

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: null,
    body: null,
  };
  let parsedBody = JSON.parse(event.body);
  try {
    const results = await peopleModel.create(parsedBody);
    response.statusCode = 200;
    response.body = JSON.stringify(results);
  } catch (e) {
    response.statusCode = 500;
    response.message = JSON.stringify(e.message);
  }
  return response;
};
