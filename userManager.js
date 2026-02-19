const EventEmitter = require("events");

class UserManager extends EventEmitter{
	constructor(maxUsers){
		super();
		this.total = 0;
		this.maxUsers = maxUsers;
	}

	register(email) {
		if(this.total >= this.maxUsers){
			this.emit("error", new Error("Sorry max users reached"))
			return;
		}
		this.total++;
		this.emit("register", email);
	}

	delete(email) {
		if(this.total > 0){
			this.total --;
		}
		this.emit('user_deleted', email)
	}
}

module.exports = UserManager;
