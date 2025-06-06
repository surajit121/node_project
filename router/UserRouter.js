import express from "express";
import user from "../model/User.js";
import uservalidation from "../model/validation.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body); // Add this line
  try {
    const { error } = uservalidation.validate(req.body);
    if (error){
      return res.status(400).json({ error: error.message });
    }
    const usersave = new user(req.body);
    const saved = await usersave.save();
    res.status(200).json(saved);
  } catch(err){
    res.status(400).json({ error: err.message });
  }
});

// read all // does not want req.params.id
router.get("/", async (req, res) => {
  try {
    const usersave = await user.find();
    res.json(usersave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update api
router.put("/:id", async (req, res) => {
  try {
    const update = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!update) {
      return res.status(404).json({ msg: "not found" });
    }
    res.json(update);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// delete api
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await user.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(400).json({ error: "not found!" });
    }
    res.json({ msg: "deleted done" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
