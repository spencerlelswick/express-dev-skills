const skills = [
  { id: 1, name: 'HTML', level: 10 },
  { id: 2, name: 'CSS', level: 4 },
  { id: 3, name: 'JavaScript', level: 8 }
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}
