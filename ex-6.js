// Exercise #6
let getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
async function getJohnInfo() {
  try {
    let profileInfo = await getJohnProfile();
    console.log(profileInfo);
    let orderInfo = await getJohnOrders();
    console.log(orderInfo);
  } catch (error) {
    console.log(error);
  }
}
getJohnInfo();
