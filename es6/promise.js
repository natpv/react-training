function asyncWithCallback(callback1, callback2) {
    setTimeout(function () {
      callback1();
    }, 2000);
    setTimeout(function () {
      callback2();
    }, 4000);
  }
  asyncWithCallback(
    function () {
      console.log("CALLBACK 1");
    },
    function () {
      console.log("CALLBACK 2");
    }
  );



 function asyncWithPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("test data");
      }, 2000);
      setTimeout(function () {
        reject();
      }, 1000);
    });
  }
  asyncWithPromise()
    .then(function () {
      console.log("PROMISE RESOLVED");
    })
    .catch(function () {
      console.log("PROMISE REJECTED");
    });

    // async & await
    async function testAsync() {
        try {
          const data = await asyncWithPromise();
          console.log("ASYNC", data);
        } catch (e) {
          console.log("ASYNC ERROR", e);
        }
      }
      testAsync();
  
  