const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { constants } = require("../utils/constants");

//@desc Show the data of top 10 cities which have the highest number of users
// and their average income.
//@route GET /api/city/topten
//@access public
const getTopTenCities = asyncHandler(async (req, res, next) => {
    try {
        const cities = await User.aggregate([
            {
                $group: {
                    _id: "$city",
                    user_count: { $sum: 1 },
                    total_income: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } },
                },
            },
            {
                $project: {
                    city: "$_id",
                    user_count: 1,
                    avg_income: { $round: [{ $divide: ["$total_income", "$user_count"] }, 2] },
                },
            },
            {
                $sort: {
                    user_count: -1,
                    avg_income: -1,
                },
            },
            {
                $limit: 10,
            },
        ]).exec();
        res.status(constants.SUCCESS).json(cities);
    } catch (err) {
        res.status(constants.SERVER_ERROR).json({ message: err.message });
    }
});

module.exports = { getTopTenCities };
