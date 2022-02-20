class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here

  constructor(first, last, id, scores) {
    super(first, last, id);
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here

  calculate() {
    let totalMarks = 0;
    for (let mark of this.scores) {
      totalMarks += mark;
    }

    const average = totalMarks / this.scores.length;

    if (90 <= average && 100 >= average) {
      return "O";
    } else if (80 <= average && 90 >= average) {
      return "E";
    } else if (70 <= average && 80 >= average) {
      return "A";
    } else if (55 <= average && 70 >= average) {
      return "P";
    } else if (40 <= average && 55 >= average) {
      return "D";
    } else {
      return "T";
    }
  }
}

let s = new Student("Heraldo", "Memelli", 8135627, [90, 100]);
s.printPerson();
s.calculate();
console.log("Grade: " + s.calculate());

// Name: Memelli, Heraldo
// ID: 8135627
// Grade: O
