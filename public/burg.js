// Send the POST request.
$(document).on("ready", function(){ 
$(document).on("click", ".btn-default", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
$.ajax("/api/burgers/"+id, {
    type: "PUT",
    data: {"devoured":true}
  }).then(
    function() {
      console.log("created new cat");
      // Reload the page to get the updated list
    //   location.reload();
    }
  );
})})