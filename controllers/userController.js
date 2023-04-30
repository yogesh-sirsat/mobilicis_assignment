const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const { constants } = require("../utils/constants");


//@desc Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
//@route GET /api/users/firstcriteria
//@access public
const getFirstCriteriaUsers = asyncHandler(async (req, res) => {
	User.find({ income: { $lt: "$5" }, car: { $in: ["BMW", "Mercedes"] } })
		.exec()
		.then((users) => {
			res.status(constants.SUCCESS).json(users);
		})
		.catch((err) => {
			res.status(constants.SERVER_ERROR).json({ message: err.message });
			console.log(err);
		});
});

//@desc Male Users which have phone price greater than 10,000.
//@route GET /api/users/secondcriteria
//@access public
const getSecondCriteriaUsers = asyncHandler(async (req, res) => {
	User.find({ gender: { $eq: "Male" }, phone_price: { $gt: "10000" } })
		.exec()
		.then((users) => {
			res.status(constants.SUCCESS).json(users);
		})
		.catch((err) => {
			res.status(constants.SERVER_ERROR).json({ message: err.message });
			console.log(err);
		});
});

//@desc Users whose last name starts with “M” and has a quote character length
// greater than 15 and email includes his/her last name
//@route GET /api/users/thirdcriteria
//@access public
const getThirdCriteriaUsers = asyncHandler(async (req, res) => {
	User.find({
		last_name: { $regex: "^M" },
		$expr: {
			$gte: [{ $strLenCP: "$quote" }, 15],
		},
		email: { $regex: new RegExp(req.query.last_name, "i") },
	})
		.exec()
		.then((users) => {
			res.status(constants.SUCCESS).json(users);
		})
		.catch((err) => {
			res.status(constants.SERVER_ERROR).json({ message: err.message });
			console.log(err);
		});
});

//@desc Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
// email does not include any digit.
//@route GET /api/users/fourthcriteria
//@access public
const getFourthCriteriaUsers = asyncHandler(async (req, res) => {
	User.find({
		car: { $in: ["BMW", "Mercedes", "Audi"] },
		email: { $not: { $regex: /\d/ } },
	})
		.exec()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
			console.log(err);
		});
});

module.exports = {
	getFirstCriteriaUsers,
	getSecondCriteriaUsers,
	getThirdCriteriaUsers,
	getFourthCriteriaUsers,
};
