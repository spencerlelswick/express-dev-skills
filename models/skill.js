const skills = [
  { id: 1, name: 'HTML', level: 10 },
  { id: 2, name: 'CSS', level: 4 },
  { id: 3, name: 'JavaScript', level: 8 }
];

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(s => s.id === parseInt(id))
}

function create(skill) {
  const newSkill = { ...skill }
  newSkill.id = skills.length + 1
  skills.push(newSkill)
}

function remove(id) {
  const removeSkill = skills.findIndex(s => s.id === id)
  skills.splice(removeSkill, 1)
}

function update(id, data) {
  console.log(id, data)
  const index = skills.findIndex(s => s.id === id)
  const updateSkill = { ...skills[index], ...data }
  console.log(updateSkill)
  skills.splice(index, 1, updateSkill)
}