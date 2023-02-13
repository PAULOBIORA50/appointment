$(document).ready(function(){
  $("#formOne").submit(function(event){
    const company1Input = $("input#reason").val();
    const company2Input = $("input#surname").val();
    const company3Input = $("input#other").val();
    const company4Input = $("input#mail").val();
    const company5Input = $("input#date").val();
    const company6Input = $("input#number").val();
    const company7Input = $("input#comment").val();


    // $(".reason").text(company1Input);
    // $(".surname").text(company2Input);
    // $(".other").text(company3Input);
    // $(".mail").text(company4Input);
    // $(".date").text(company5Input);
    // $(".number").text(company6Input);
    // $(".comment").text(company7Input);


    $('#collect').show();
    event.preventDefault();

  })
  
}) 

