// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function displayJohnProfile() {
  try {
    const data = await getJohnOrders();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
displayJohnProfile();
