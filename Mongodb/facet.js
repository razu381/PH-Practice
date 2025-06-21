db.users.aggregate([
    {
       $facet: {
        "friendsCount": [
            {
                $unwind: "$friends"
            },
            {
                $group: { _id: "$friends",count: {$sum: 1}}
            }
        ],
        "countries_count": [
            {
                $group: { _id: "$address.country",count: {$sum: 1}}
            }
        ],
        "interests_count": [
            {
                $unwind: "$interests"
            },
            {
                $group: { _id: "$interests", count: {$sum: 1}}
            }
        ]
       } 
    }
    
])