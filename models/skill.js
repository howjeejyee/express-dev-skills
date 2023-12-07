const skills = [
    { id: 1, name: 'JavaScript', level: 'Advanced' },
    { id: 2, name: 'Node.js', level: 'Intermediate' },
  ];
  
  module.exports = {
    getAll: () => skills,
    getOne: (id) => skills.find((skill) => skill.id === id),
  };
  