export const getJSON = async function (url) {
  const res = await fetch(url);
  const data = res.json();
  return data;
};

export const AJAX = async function (url, uploadData = undefined) {
  const fetchPromise = uploadData
    ? fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadData),
      })
    : fetch(url);

  const response = await fetchPromise;
  const data = await response.json();

  return data;
};
