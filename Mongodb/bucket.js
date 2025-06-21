db.users.aggregate([
    {$bucket: {
          groupBy: "$age",
          boundaries: [ 0, 20, 60, 80],
          default: "80+",
          output: {
            "count": { $sum: 1 },
            "name" : { $push: {name:"$name.firstName",age:"$age"}}
          }
        }
    },
    {
        $limit: 2
    },
    {
        $sort: {count: 1}
    },
    {
        $project: {
            count:1
        }
    }
])