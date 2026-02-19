const userManager = require("./userManager");
const EmailService = require("./emailService");
const DatabaseService = require("./dbService");


const userM = new userManager(2);
const emailService = new EmailService();
const databaseService = new DatabaseService()


userM.on("register", (email) => {
    databaseService.saveUser(email);
    emailService.send(email);
});

userM.on("error", (error) => {
    console.error("Gracefully handling error: ", error.message);
})
userM.register("owenhood");
userM.register("owenhood");
userM.register("owenhood");

// listeners
console.log(`we have ${userM.listenerCount("register")} for the register events `)