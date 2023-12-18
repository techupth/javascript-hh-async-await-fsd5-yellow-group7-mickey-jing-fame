// Exercise #4
let getJohnProfile = () => {
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
// Start coding here
async function getJohnProfiles() {
  try {
    const data = await getJohnProfile();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getJohnProfiles();
