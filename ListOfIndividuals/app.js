const individuals = [
  new Person("John", "Wick"),
  new Person("Karl", "Seagan"),
  new Person("Andrés", "Fonseca"),
  new Person("Truman", "Burbank")
];

function showIndividuals() {
  console.log(showIndividuals);
  let text = "";
  for (let person of individuals) {
    console.log(person);
    text += `<li>${person.name} ${person.surname}</li>`;
  }
  document.getElementById("individuals").innerHTML = text;
}

function addIndividuals() {
  const form = document.forms["form"];
  const name = form["name"];
  const surname = form["surname"];
  let console = "";
  if (name.value != "" && surname.value != "") {
    const person = new Person(name.value, surname.value);
    individuals.push(person);
    showIndividuals();
  }else {
    console = "There is no information to add.";
  }
  
  document.getElementById("console").innerHTML = `${console}`;
}
