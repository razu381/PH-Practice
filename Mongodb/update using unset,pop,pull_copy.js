// db.users.updateOne(
//     {_id: new ObjectId("6406ad63fc13ae5a40000065")},
//     {
//         $set: {
//             interests: ['Gaming','Programming']
//         }
//     },
//     {
//         upsert: false,
//     }
// )

// db.users.updateOne(
//     {_id: new ObjectId("6406ad63fc13ae5a40000065")},
//     {
//         $push: {
//             interests: ['Gaming','Programming']
//         }
//     },
//     {
//         upsert: false,
//     }
// )


// db.users.updateOne(
//     {_id: new ObjectId("6406ad63fc13ae5a40000065")},
//     {$push: {interests: "Cycling"}},
//     {upsert:false}
// )
// db.users.updateOne(
//     {_id: new ObjectId("6406ad63fc13ae5a40000065")},
//     {$addToSet: {interests: {$each: ['Biographies','Novels']}}},
//     {upsert: false},
// )


// db.users.updateOne(
//     {_id: new ObjectId("6406ad63fc13ae5a40000065")},
//     {$push: {interests: {$each: ['Gardening','Reading']}},
//     {upsert:false},
// )


// db.users.updateOne(
//     {_id: new ObjectId("6406ad63fc13ae5a40000065")},
//     {$pullAll: {interests: ["Gardening",
// 		"Reading",
// 		"Gardening",
// 		"Reading",
// 		"Gardening",
// 		"Reading"]}}
// )


db.users.updateOne(
    {_id: new ObjectId("6406ad63fc13ae5a40000065")},
    {
        $pop: {interests: -1}
    }
)