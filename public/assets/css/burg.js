// Send the PUT request.
$(document).ready(function () {
  $(".burger-container").on("click", ".eat-burger-btn", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    $.ajax(`/burgers/updateOne/${id}`, {
      type: "PUT"
    }).then(function (data) {
      console.log("*****data",data);
      location.reload();
    });
  });
});
