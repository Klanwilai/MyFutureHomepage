db.createUser({
    user: "ThatFatGuyWithWarts",
    pwd: "password",
    roles: [{
        role: "readWrite",
        db: "super-awesome-homepage"
    }]
});