export const helpHttp = () => {
  const handlerFetch = (endpoint, options = {}) => {
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.method = options.method || "GET";

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    return fetch(endpoint, options)
      .then((res) => {
        if (!res.ok)
          return Promise.reject({
            error: true,
            status: res.status || 0,
            statusText: res.statusText || "Ocurrio un Error",
          });

        return res.json();
      })
      .catch((err) => err);
  };

  const get = (endpoint, options) => handlerFetch(endpoint, options);

  const post = (endpoint, options) => {
    options.method = "POST";
    return handlerFetch(endpoint, options);
  };

  const put = (endpoint, options) => {
    options.method = "PUT";
    return handlerFetch(endpoint, options);
  };

  const del = (endpoint, options = {}) => {
    options.method = "DELETE";
    return handlerFetch(endpoint, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
