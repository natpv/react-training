const person = {
    name: "mike",
    age: 12,
    greeting: function () {
      setTimeout( () => {
        console.log("Hello from", this.name);
      }, 1000);
    },
  };
  person.greeting();
  person.name = "test";
  person.greeting();
  