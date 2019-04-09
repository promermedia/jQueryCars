function checkLoggedIn() {
  var userJSON = localStorage.getItem("theUser");
  if (userJSON != null) {
    user = JSON.parse(userJSON);
    var formData = new FormData();
    formData.append("email", user.email);
    formData.append("token", user.token);
    $.ajax({
      url: "./server/api/checkToken.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false
    }).done(function(res) {
      result = JSON.parse(res);
      if (result.message != "no user") {
        userJSON = JSON.stringify(result[0]);
        localStorage.setItem("theUser", userJSON);
        var name = result[0].firstName;
        menuFuncs.carsUI(name);
      } else {
        menuFuncs.signIn();
      }
    });
  } else {
    menuFuncs.signIn();
  }
}

function signIn(e) {
  e.preventDefault();
  var formData = new FormData($(this)[0]);
  $.ajax({
    url: "./server/api/signIn.php",
    type: "POST",
    data: formData,
    processData: false,
    contentType: false
  }).done(function(res) {
    result = JSON.parse(res);
    console.log(result);
    if (result.message != "no user") {
      userJSON = JSON.stringify(result[0]);
      localStorage.setItem("theUser", userJSON);
      menuFuncs.carsUI(result[0].firstName);
    } else {
      errorHand.signIn();
    }
  });
}
