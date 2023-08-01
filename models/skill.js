const skills = [
  { id: 1, name: 'HTML', level: 10 },
  { id: 2, name: 'CSS', level: 4 },
  { id: 3, name: 'JavaScript', level: 8 }
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(s => s.id === parseInt(id))
}
