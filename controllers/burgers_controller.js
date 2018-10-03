const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
//hb object
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        // passing on data for index.handlebars ln 4 and 19
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // rendering is to pass index.handlebars with the handle bar object ln 8 as a result
        res.render("index", hbsObject);
    });
});
// posting the info into the api burger api and making a request
router.post("/api/burger", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});
//
router.put("/api/burger/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log("your condition is" + condition);
    console.log("req.body: " + req.body.devoured)
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
