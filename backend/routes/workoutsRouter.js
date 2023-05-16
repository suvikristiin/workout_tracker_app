import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("All workouts data")
})

router.get("/:id", (req, res) => {
  res.status(200).send("Workout data for a specific id")
})

router.post("/", (req, res) => {
  res.status(200).send("Add new workout data");
})

export default router;