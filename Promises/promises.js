//Do an asynch Task
// DB Calls,Network,CryptoGraphy

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//Another Way .. to write
new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
    console.log("Async Task 2..");
  }, 1000);
}).then(() => console.log("Promise consumed 2"));

// Another Way

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 3...");
    resolve({
      username: "shubham",
      email: "shubham@gmail.com",
    });
  }, 1000);
}).then((user) => {
  console.log(user);
});

// Another Way=>4
// Chaining..
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 4....");
    // let err = true;
    let err = false;
    if (!err) {
      resolve({
        userName: "SR",
        mobNo: 7083347185,
      });
    } else {
      reject("ERROR : Something Went Wromg");
    }
  }, 1000);
})
  .then((userDetails) => {
    console.log(userDetails);

    console.log(userDetails.userName);
    //   console.log(userDetails.mobNo);
    return userDetails.mobNo;
    // Anything you try to return will be available in next then (Chaning...)
  })
  .then((uMob) => console.log(uMob))
  .catch((err) => console.log(err)) // reject value
  .finally(() => console.log("The promise is either resolved Or Rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 5.....");
    let err = true;
   // let err = false;
    if (!err) {
      resolve({
        userName: "SR",
        mobNo: 7083347185,
      });
    } else {
      reject("ERROR : ............. Went Wromg");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
    
}
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))