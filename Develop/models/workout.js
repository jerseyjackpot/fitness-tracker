const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: { type: String },
      name: { type: String },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number }
    },
  ]
},
  {
    toJSON: {      
      // include any virtual properties when data is requested      
      virtuals: true
    }
  });

workoutSchema.virtual("totalDuration").get(function () {  
  // "reduce" array of exercises down to just the sum of their durations  
  return this.exercises.reduce((total, exercise) => { return total + exercise.duration; }, 0);
});

const Example = mongoose.model("workout", workoutSchema);

module.exports = Example;