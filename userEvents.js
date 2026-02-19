const userManager = require("./userManager");

const userM = new userManager(20);

userM.on("register", (email) => {
    console.log(`Welcome ${email}`);
});

/**  This line will run only once 
 * userM.once("register", (email) => {
    console.log(`Welcome ${email}`);
});
**/
userM.register("test@mail.com");

userM.on("user_deleted", (email) => {
    console.log(`User ${email} has been deleted`);
});

userM.delete("owenhood80@gmail.com");