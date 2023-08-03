const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  deleteOne,
  edit,
  update
};

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}

function newSkill(req, res) {
  res.render('skills/add', { title: 'Add new skill' });
}

function create(req, res) {
  Skill.create(req.body)
  res.redirect('/skills')
}

function deleteOne(req, res) {
  Skill.remove(Number(req.params.id))
  res.redirect('/skills')
}

function edit(req, res) {
  res.render('skills/edit', { title: 'Add new skill', skill: Skill.getOne(req.params.id) });
}

function update(req, res) {
  Skill.update(Number(req.params.id), req.body)
  res.redirect('/skills')
}