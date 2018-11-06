// eslint-disable-next-line
export function json(statusOrbody, body) {
  let statusCode = 200;
  let resource = body;
  if (body) {
    statusCode = statusOrbody;
  } else {
    resource = statusOrbody;
  }
  return { statusCode, body: JSON.stringify(resource) };
}
