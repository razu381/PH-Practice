// db.users.find({gender: {$eq: 'Male'}}).toArray()

// db.users.find(
//     {gender: 'Female',
//     age: {$gte:18, $lte:26},
//     interests: {$in: ['Travelling','Reading','Gardening'],$nin: ['Gaming']}
//     },
//     {gender:1,interests:1,age:1}
//     )
 
//  db.users.find( 
//     {
//         $and: [
//             {gender: 'Female'},
//             {age: {$gte: 18} },
//             {age: {$lte: 26}},
//             {interests: {$in: ['Reading']}},
//             {interests: {$nin: ['Gaming']}}
//         ],
//     }
// ).project({age:1,gender:1,interests:1})

db.users.find(
    {
        interests: {$not: {$in: ['Gaming']}},
        gender: {$not: {$in: ['Male']}},
        age: {$lte:26}
    },
    {
        gender:1,
        interests:1,
        age:1,
    }
)
    
    


