const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'lorem10',
    tag: 'Technology',
    username: 'Jacob111',
    date: '2023-04-12',
  },
  {
    id: 2,
    text: 'lorem so random text idk bro update',
    tag: 'Inventions',
    username: 'StevieJ32',
    date: '2022-02-22',
  },
  {
    id: 3,
    text: 'the third text of stuff that is a placeholder',
    tag: 'Software',
    username: 'WaterWally',
    date: '2023-07-27',
  },
];

// Get all ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  // Error
  if (!idea) {
    return res.status(404).json({ success: false, error: 'id was not found' });
  }

  res.json({ success: true, data: idea });
});

module.exports = router;
