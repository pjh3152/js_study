
const login = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve(username);
      } else {
        reject(new Error("이름이 없습니다!"));
      }
    }, 1000);
  })
}

const addToCart = (product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject(new Error("상품이 없습니다!"));
      }
    }, 1000);
  })
}

const constmakePayment = (cardNo, product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if( cardNo.length != 8 ) {
        reject(new Error("잘못된 카드번호 입니다!"));
        return;
      }
      if( !product ) {
        reject(new Error("상품이 없습니다!"));
        return;
      }
      resolve(product);
    }, 1000);
  })
}

login("릭코").then((username) => {
  console.log(`${username}님 로그인 했습니다.`);
  return addToCart("");
}).then((product) => {
  console.log(`${product}를 카트에 담았습니다.`);
  return makePayment("12345678",product);
}).then((product) => {
  console.log(`${product}를 결제했습니다`);
}).catch((err) => {
  console.log(err.message);
})