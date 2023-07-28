const domain = window.location.origin;
const port = 3000;
const url = `${domain.replace(/:\d+/, "")}:${port}`;

export const listCategories = () => {
  return fetch(url + "/api/categories", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json());
};

export const listVideos = () => {
  return fetch(url + "/api/videos", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json());
};

export const createVideo = (formData) => {
  return fetch(url + "/api/videos", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  }).then((response) => {
    const data = response.json();

    if (!response.ok) {
      return Promise.reject(data.message);
    } else {
      return data;
    }
  });
};
