db.orders.aggregate([
    {
        $lookup: {
           from: "users",
           localField: "userId",
           foreignField: "_id",
           as: "user"
         }
        
    },
    // {
    //     $project: {
    //         products: 1,
    //         name:1
    //     }
    // }
])