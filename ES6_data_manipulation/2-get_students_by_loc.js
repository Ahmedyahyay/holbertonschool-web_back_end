function getStudentsByLocation(list, city){

  return list.filter((student) => student.location === city);
}
default export getListStudents;

