const express = require("express");
const router = express.Router();
const {
    getFirstCriteriaUsers,
    getSecondCriteriaUsers,
    getThirdCriteriaUsers,
    getFourthCriteriaUsers,
} = require("../controllers/userController");

router.route("/firstcriteria").get(getFirstCriteriaUsers);
router.route("/secondcriteria").get(getSecondCriteriaUsers);
router.route("/thirdcriteria").get(getThirdCriteriaUsers);
router.route("/fourthcriteria").get(getFourthCriteriaUsers);

module.exports = router;
