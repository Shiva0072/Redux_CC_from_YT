const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
};

export default fetchGetUsers;
