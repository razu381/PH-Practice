// db.users.aggregate([
//     {$match: {gender: "Male",age: {$gte: 18,$lte: 30}}},
//     {$addFields: {'course-provider': "programming hero"}},
//     {$project: {name: 1,age:1,'course-name': 1,'course-provider':1}}
// ])


// db.users.aggregate([
//     {$group:
//     { _id: "$age",
//     name: {$push: "$name.firstName"},
//     count: {$sum:1}}},
// ])

// db.users.aggregate([
//     {$group:{ _id: "$age",doc: {$push: "$$ROOT"},count: {$sum:1}}},
//     {$project: {"doc.name":1,'doc.email':1,'doc.phone':1}},
   
// ])


db.users.aggregate([
    {
        $group: { _id: null,
        total_age: {$sum: "$age"},
        max_salary: {$max: "$salary"},
        min_salary: {$min: "$salary"}
        }
    },
    {
        $project: {
            max_salary: 1,
            minimum_salary:"$min_salary",
            min_max_add: {$add: ["$max_salary","$min_salary"]}
        }
    }
])