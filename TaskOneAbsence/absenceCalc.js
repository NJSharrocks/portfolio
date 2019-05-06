/*A for loop that cycles over the input elements of the HTML and includes
an event listener, which means whenever a key is pressed down (i.e. to type
a number, the multiply function below is fired)*/
var inputs = document.getElementsByTagName('input')
for(var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keydown', multiply, false);
}


/*All of the maths for the calculator is completed in one function
which is then called  in the absenceCalc.html doc*/
function multiply() {

  /*Firstly the input for the number of employees and the average
  salary from the html doc are called and placed into variables*/
  var employees = document.getElementById('employees').value;
  var salary = document.getElementById('salary').value;
  /*The two variables above are then multiplied together and the
  result is stored in a new variable*/
  var totalSalary = parseInt(employees) * parseInt(salary);
  var result1 = document.getElementById('totalSalary');
  result1.innerHTML = totalSalary;
  /*The same method is used to get the input for the absence %
  before it is stored in a variable. Then the totalSalary from
  above is called back, divided by 100 and then multiplied by the
  inputted absence percentage, which gives the absenceCost for the
  year. This is fed back to the HTML doc for display to the user but
  also called again here and divided by 12 in order to give more data
  for the user, the monthly absence cost.*/
  var absence = document.getElementById('absence').value;
  var absenceCost = parseInt(totalSalary) / 100 * parseInt(absence);
  var result2 = document.getElementById('absenceCost');
  result2.innerHTML = absenceCost;
  var monthlyAbsence = parseInt(absenceCost) / 12;
  var result3 = document.getElementById('monthlyAbsence');
  result3.innerHTML = monthlyAbsence;
}
