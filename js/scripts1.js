

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var NameInput = $("input#Name").val();
    var AddressInput = $("input#Address").val();
    var CityInput= $("input#City").val();
    var stateInput = $("input#state").val();
    var zipcodeInput = $("input#zipcode").val();


    $(".Name").text(NameInput);
    $(".Address").text(AddressInput);
    $(".City").text(CityInput);
    $(".state").text(stateInput);
    $(".zipcode").text(zipcodeInput);



    $("#story").show();

    event.preventDefault();
  });
});
