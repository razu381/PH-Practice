db.users.find(
    {age: {$gt:30}},
).project({name:1,email:1})

problem 2
db.users.find(
    {
        favoutiteColor: {$in: ['Maroon','Blue']}
    }
)

problem 3
db.users.find( 
    {skills: {$size: 0}}
)


problem 4
db.users.find(
    {
        skills:{$elemMatch: {name: "JAVASCRIPT"}},
        skills:{$elemMatch: {name: "JAVA"}}
    }
    
).project({skills:1})


problem 5
db.users.updateOne(
    {email: "amccurry3@cnet.com"},
    {
        $addToSet: {
            skills: {"name": "Python","level": "Beginner","isLearning": true}
        }
    }
)


//problem 6
db.users.updateOne(
    {email: "amccurry3@cnet.com"},
    {
        $addToSet: {
            languages: "Spanish"
        }
    }
)

db.users.updateOne(
    {email: "amccurry3@cnet.com"},
    {$pull: {skills: {name: "KOTLIN"}}}
)