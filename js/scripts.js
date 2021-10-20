$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();

    $("ul#user").text(person1Input);

    $("ul#webpage").text(person1Input);
    
  });
});