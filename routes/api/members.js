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
  console.log(req.body)
  const newMember = {
    id:uuid.v4(),
    ...req.body
  }

  if (!newMember.name) {
    return res.status(400).json({
      msg: 'Please include a name'
    })
  } 

  members.push(newMember)
  res.json(members)
})

// Update members

router.put('/:id', (req, res) => {
  // console.log(req.body)
  const member =  members.find(member => member.id === parseInt(req.params.id))


  if (member) {
    const updMember = req.body
    members.forEach(item => {
      // console.log(updMember)
      if(item.id === parseInt(member.id)){
        Object.keys(item).forEach(key => {
          item[key] = updMember[key]
        })
        item.id = member.id
        console.log(item)
        res.json({msg: 'Member updated', member: item})
      }
    })
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
})


// Delete Member



module.exports = router