const headers = {
  aboutUI: "<h2><b>Welcome</b> to the About Section</h2>",
  homeUI: "<h2>Welcome to the Home Section</h2>",
  carsUI: function(name) {
    var text = `<h2>Welcome ${name}, to the Cars Section</h2>`;
    return text;
  },
  contactUI: "<h2>Welcome to the Contact Section</h2>",
  search: "<h2>Welcome to the Search Section</h2>",
  signIn: "<h2>Please Sign In</h2>"
};

const errors = {
  signIn: "<p id='wrongCred'>Wrong Credentials, please try again</p>"
};

const forms = {
  signIn: `<div id="signInDiv">
          <form id="signIn" method="POST" enctype="text/plain">
            <div class="form-group">
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Sign In" />
            </div>
          </form>
        </div>`
};

effects = {
  navToggle: function() {
    if ($("#mySidenav").css("width") == "300px") {
      effects.toggleSideBar(0);
      $(this)
        .css({ left: "0px", color: "black" })
        .removeClass("far fa-caret-square-left")
        .addClass("fas fa-chevron-right");
      $("#container").removeClass("fade-fade");
    } else {
      effects.toggleSideBar(300);
      $(this)
        .css({ left: "270px", color: "rgb(236, 224, 252)", zIndex: 100 })
        .removeClass("fas fa-chevron-right")
        .addClass("far fa-caret-square-left");
      $("#container").addClass("fade-fade");
    }
  },
  toggleSideBar: function(w) {
    $("#mySidenav").css("width", w);
  }
};
