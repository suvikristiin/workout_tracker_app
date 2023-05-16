import express from 'express';
import workoutsRouter from "./routes/workoutsRouter.js"
import exercisesRouter from "./routes/exercisesRouter.js"
import trainingPlan from "./routes/trainingPlanRouter.js";
import "dotenv/config";

const app = express();
const port =process.env.PORT;

app.use("/workouts", workoutsRouter );
app.use("/exercises", exercisesRouter);
app.use("/trainingplan", trainingPlan);

app.get("/", (req, res) => {
  res.send("This is the Express backend for a Workout Tracker application.")
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});