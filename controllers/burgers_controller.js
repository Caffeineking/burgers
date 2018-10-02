var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
//
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.item_id;
    console.log("condition", condition);
    console.log("your condition is" + condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
