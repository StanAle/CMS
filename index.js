function addInTable() {
  var table = document.getElementById("table");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var sex = document.getElementById("sex").value;
  var birthday = document.getElementById("birthday").value;
  var tableLength = document.getElementById("table").rows[0].length;
  var row = table.insertRow(1);
  var cellFname = row.insertCell(0);
  var cellLname = row.insertCell(1);
  var cellEmail = row.insertCell(2);
  var cellSex = row.insertCell(3);
  var cellBirthday = row.insertCell(4);
  cellFname.innerHTML = fname;
  cellLname.innerHTML = lname;
  cellEmail.innerHTML = email;
  cellSex.innerHTML = sex;
  cellBirthday.innerHTML = birthday;
}