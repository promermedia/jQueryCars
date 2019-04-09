setTimeout(() => {
  $("#welcome").fadeOut(2000);
}, 1000);

const elements = {
  user: {},
  container: $("#cont")
};

const buttons = {
  home: function() {
    menuFuncs.homeUI();
  },
  about: function() {
    menuFuncs.aboutUI();
  },
  contact: function() {
    menuFuncs.contactUI();
  },
  cars: function() {
    checkLoggedIn();
  },
  search: function() {
    menuFuncs.search();
  }
};

for (var key in buttons) {
  if (buttons.hasOwnProperty(key)) {
    $("#" + key).click(function() {
        buttons[this.id]();
    });
  }
}

$("#navButton").click(effects.navToggle);

const menuFuncs = {
  aboutUI: function() {
    elements.container.html(headers.aboutUI);
  },
  homeUI: function() {
    elements.container.html(headers.homeUI);
  },
  carsUI: function(name) {
    var text = headers.carsUI(name);
    elements.container.html(text);
  },
  contactUI: function() {
    elements.container.html(headers.contactUI);
  },
  search: function() {
    elements.container.html(headers.search);
  },
  signIn: function() {
    elements.container.html(headers.signIn + forms.signIn);
    $("#signIn").submit(signIn);
  }
};

const errorHand = {
  signIn: function () {
    elements.container.append(errors.signIn);
  }
}