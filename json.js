let student1 = {
    name: 'Arman',
    age: 16,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    address: {
      city: 'Turkistan',
      postCode: '102525'
    }
  };
  
  let student2 = {
    name: 'Nuriya',
    age: 25,
    isAdmin: true,
    courses: ['python', 'java'],
    husband: null,
    address: {
      city: 'Almaty',
      postCode: '94105'
    }
  };
  
  let students = [student1, student2];
  
  let json = JSON.stringify(students);
  
  alert(typeof json);
  
  alert(json);