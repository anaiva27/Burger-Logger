// Send the PUT request.
$("#button").on("click", function(event) {
    event.preventDefault();
    console.log("I am here");
  
  var id = $(this).closest("#list").data("id"); 
   console.log(id)
$.ajax("/burgers/updateOne/"+id, {
    type: "PUT",
    data: {"devoured":true}
  }).then(
    function() {
      console.log("you ate da burger");
    //  location.reload();
    }
  );
})  
