const promise = new Promise((resolve, reject) => {

  const i = 1 + 1;

  if (i === 2) {
    resolve(true);
  } else {
    reject(false);
  }
})

promise.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log("finally");
})