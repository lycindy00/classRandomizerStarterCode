$(document).ready(function(){

$("#studentButton").click(function() {
var Code2College_Students = ["Marlene", "Andrea", "Sophie", "Vanessa", "Natalia","Cindy", "Yasmeen"];

var student_index =Math.floor(Math.random()*Code2College_Students.length);
$("#studentDisplay").append(Code2College_Students[student_index]);

});


$("#submitButton").click(function(){
 Code2College_Students.push($("#name").val());
});


$("#teacherButton").click(function() {
    var Code2College_Educators = ["Stephanie", "Chris", "Jon","Matt"];
    var teacher_index = Math.floor(Math.random()*Code2College_Educators.length);
    $("#teacherDisplay").append(Code2College_Educators[teacher_index]);
});


});
