const Conversation = require("../models/Conversation");

const router = require("express").Router();

//new conv

router.post("/", async (req, res) => {
  const newCoversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newCoversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json("internal error");
    console.log(err);
  }
});

//get conv of a user
router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
