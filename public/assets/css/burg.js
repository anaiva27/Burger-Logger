// Send the PUT request.
// $(document).on("ready", function(){ 
$("#button").on("click", function(event) {
    event.preventDefault();
    console.log("I am here");
  var id = $(this).data("id");
$.ajax("/api/burgers/"+id, {
    type: "PUT",
    data: {"devoured":true}
  }).then(
    function() {
      console.log("created new burger");
    }
  );
})  
// })
//   
      // Reload the page to get the updated list
    //   location.reload();