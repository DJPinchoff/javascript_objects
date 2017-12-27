function greetings(name, job) {
  var fullName = name.join(" ");
  var fullJob = job["title"] + ' ' + job["occupation"];

  console.log('Hello, ' + fullName + '! Nice to have a ' + fullJob + ' around.');
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
