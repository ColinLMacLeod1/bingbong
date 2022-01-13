const call = (path, method, body) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return new Promise((resolve, reject) => {
    fetch(
      `${
        process.env.NODE_ENV === "production" ? "" : " http://localhost:3005"
      }${path}`,
      {
        method,
        headers: headers,
        body: body && JSON.stringify(body),
      }
    )
      .then(async (res) => ({
        response: await res.json(),
        status: res.status,
      }))
      .then(({ response, status }) => {
        console.debug("api response", response);
        resolve({ response, status });
      })
      .catch((err) => {
        console.error("api error", err);
        reject(err);
      });
  });
};

module.exports = call;
