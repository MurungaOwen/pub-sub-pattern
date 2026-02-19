class Db{
    saveUser(email) {
        console.log(
            `running query: INSERT INTO users VALUES (email)`
        )
    }
}

module.exports = Db;