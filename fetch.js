
const getApi = async () => {
   return await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    }).then((data) => {
      return data;
    })
}

getApi().then((result) => {
  console.log(result[0].id + "," + result[0].name);
});
