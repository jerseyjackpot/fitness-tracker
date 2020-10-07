const { route } = require("./htmlroutes");
const router = require("express").Router();
const workouts = require("../models/workout.js");

router.get("/api/workouts", function(req,res) {
    workouts.find().then(function(data){
        // console.log(data);
        res.json(data);
    })    
});

router.put("/api/workouts/:id", function(req,res) {
    const workoutID = req.params.id;
    const exercise = req.body;
    workouts.findByIdAndUpdate(workoutID, {$push:{exercises:exercise}}).then(function (workout){
        res.json(workout);
    })
});

router.post("/api/workouts", function(req,res) {
    workouts.create({}).then(function(newworkout){
        res.json(newworkout);
    })
});

router.get("/api/workouts/range", function(req,res) {
    workouts.find().limit(7).then(function(data){
        // console.log(data);
        res.json(data);
    })  
});
module.exports = router;
