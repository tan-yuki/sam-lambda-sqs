exports.lambdaHandler = async function (event, context) {
  console.log(event, context);
  event.Records.forEach((record) => {
    const { body } = record;
    console.log(body);
  });
  return {};
};
