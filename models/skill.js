const skills = [
  { id: 1, name: 'HTML', level: 10 },
  { id: 2, name: 'CSS', done: 4 },
  { id: 3, name: 'JavaScript', done: 8 }
];

module.exports = {
  getAll
};

function getAll() {
  return skills;
}
