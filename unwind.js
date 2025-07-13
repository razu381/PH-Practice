// db.users.aggregate([
//   {$unwind: "$interests"},
//   { $group: { _id: "$age",all: {$push:{ age:"$age",name:"$name.firstName",interests:"$interests"}}}},
//   {$project: {'all.age':1,'all.interests':1}}
// ])

db.users.aggregate([
   {
       $unwind: "$interests"
   },
   {
       $group: {_id: "$age",intersts_per_age:{$push:"$interests"}}
   }
])




