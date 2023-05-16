import express from 'express';
const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).send("Add new training plan data");
})

export default router;