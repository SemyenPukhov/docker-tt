const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users
    });
  } catch (error) {
    console.log('err', error);
  }
});

router.post('/', async (req, res) => {
  console.log('req.body', req.body);
  const { username } = req.body;
  if (!username) throw Error('Username is required');
  try {
    const user = new User({ username });

    await user.save();

    const users = await User.find();

    res.json({
      users
    });
  } catch (error) {
    console.log('err', error);
  }
});

module.exports = router;
