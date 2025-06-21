// db.users.find({age: {$exists: true}})

// db.users.find({age: {$type: 'string'}})

//db.users.find({age: {$type: 'number'}})

// db.users.find({friends: {$size: 0}}).project({'name.firstName':1,friends: 1})

db.users.find({company: {$type: 'null'}},{name:1,company:1})