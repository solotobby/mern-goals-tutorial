const asyncHandler = require('express-async-handler');
const { find } = require('../models/goalModel');
const Goal = require('../models/goalModel')
//@desc Get goals
//@route GET api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
})

//@desc Set goal
//@route POST api/goals
//@access private
const setGoal = asyncHandler(async (req, res) => {
   if(!req.body.text){ //checks if text is passed 
       res.status(400)
       throw new Error('please add a text field')
   } 
   const goal = await Goal.create({
       text: req.body.text,
   })
    res.status(201).json(goal);
})

//@desc Update goal
//@route UPDATE api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedGoal);
})

//@desc Delete goal
//@route DELETE api/goals/:id
//@access private
const deleteGoal = asyncHandler(async (req, res) => {
    const findGoal = await Goal.findById(req.params.id)
    if(!findGoal)
    {
        res.status(400)
        throw new Error('Goal not found')
    }
    await findGoal.remove()

    res.status(200).json({message: `${req.params.id}`});
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}