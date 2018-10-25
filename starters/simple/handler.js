'use strict';

module.exports.getHello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };
};

module.exports.helloInterval = async (event, context) => {
  console.log('Hello Interval');
  return {};
};
