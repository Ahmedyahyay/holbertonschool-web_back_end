const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }
    const students = lines.slice(1).map(line => line.split(','))
      .filter(fields => fields.length === lines[0].split(',').length);
    const total = students.length;
    console.log(`Number of students: ${total}`);
    const fieldMap = {};
    students.forEach(fields => {
      const field = fields[fields.length - 1];
      const firstname = fields[0];
      if (!fieldMap[field]) {
        fieldMap[field] = [];
      }
      fieldMap[field].push(firstname);
    });
    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

