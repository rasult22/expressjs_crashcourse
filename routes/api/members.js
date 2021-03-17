const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

// Gets All Members
router.get('/', (req, res) => {
  res.json(members)
})

// Get Single Member
router.get('/:id', (req,res) => {
  const member =  members.find(member => member.id === parseInt(req.params.id))

  if (member) {
      res.json(member)
  } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
})



// Create Members

router.post('/', (req, res) => {
  const newMember = {
    id:uuid.v4(),
    ...res.body
  }
})

module.exports = router