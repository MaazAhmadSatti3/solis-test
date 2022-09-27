//
db.property.aggregate([
    // pipeline

    // stage 1
    {$match: { 
    {ratingsAverage: {$lte: 5}}, {province: {$eq: "punjab"}}, 
    {province: {$eq: "sindh"}}, {province: {$eq: "kpk"}}, {province: {$eq: "balochistan"}}
    },

    // stage 2
    {$count: "result"}
])