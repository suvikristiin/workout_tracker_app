import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("All exercises data")
})

router.get("/:id", (req, res) => {
  res.status(200).send("Exercise data for a specific id")
})

export default router;