Meteor.startup(function () {
    var admin = Meteor.users.findOne({username: "admin"});
    if (!admin) {
        console.log('First launch. Use admin/Just4Fun to log in')
        Accounts.createUser({
            username: "admin", password: "Just4Fun"
        })
    } else {
        console.log('admin already exists')
    }
})