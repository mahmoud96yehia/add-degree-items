
function AddName() {

    var name = document.getElementById('name').value;
    document.getElementById('namehere').innerHTML = name;


}
var material = ['math', 'science', 'Arabic', 'English'];
var Sdegree = [];
var Sindex = 0;
function addDegree() {

    Sdegree[Sindex] = parseInt( document.getElementById("degreee").value);
    Sindex++;
    document.getElementById("degreee").value = '';

    var tbl = '<table><tr><th> Degree </th></tr>';

    for (var i = 0; i < Sdegree.length; i++) {
      
        tbl += '<tr> <td>' + material[i] + ' = ' + Sdegree[i] + '</td></tr>';
    }
    tbl += '</table>';
    document.getElementById('studentmark').innerHTML = tbl;
   
        

}
function calcDegree() {

    let totaldegree = 0;
    for (var i = 0; i < Sdegree.length; i++) {

        totaldegree += Sdegree[i];

    }

    let avg = totaldegree / Sdegree.length;

    document.getElementById('total').innerText = avg;

    if (avg < 60) {

        document.getElementById('answer').innerText = "F";

    }
    else if (avg < 70) {
        document.getElementById('answer').innerText = "D";
    }
    else if (avg < 80) {
        document.getElementById('answer').innerText = "C";
    }
    else if (avg < 90) {
        document.getElementById('answer').innerText = "B";
    }
    else if (avg < 100) {
        document.getElementById('answer').innerText = "A";
    }
}
