var people = [
{
  login: "Mathdrquinn",
  avatar_url: "https://avatars.githubusercontent.com/u/6947446?v=2",
  name: "Brendan Quinn",
  location: "United States",
  email: "quinn.197@gmail.com",
  public_repos: 8,
  public_gists: 0,
  followers: 6,
  following: 4,
  created_at: "2014-03-14T02:51:14Z"
},
{
  login: "lapty",
  avatar_url: "https://avatars.githubusercontent.com/u/8241367?v=2",
  name: "Charles Nguyen",
  location: "Charleston, SC",
  email: "charles.qh.nguyen@gmail.com",
  public_repos: 9,
  public_gists: 0,
  followers: 8,
  following: 16,
  created_at: "2014-07-23T02:31:13Z"
},
{
  login: "rphuber",
  avatar_url: "https://avatars.githubusercontent.com/u/8245890?v=2",
  name: "Ryan Huber",
  location: "Charleston, SC",
  email: "none@silly.com",
  public_repos: 7,
  public_gists: 0,
  followers: 7,
  following: 14,
  created_at: "2014-07-23T12:33:06Z",
},
{
  login: "andrewraynal",
  avatar_url: "https://avatars.githubusercontent.com/u/7121310?v=2",
  name: "Andrew",
  location: "Nowhere, SC",
  email: "blank@silly.com",
  public_repos: 29,
  public_gists: 0,
  followers: 10,
  following: 6,
  created_at: "2014-04-01T00:16:04Z",
},
{
  login: "crotten",
  avatar_url: "https://avatars.githubusercontent.com/u/8238886?v=2",
  name: "Chris Otten",
  location: "Nowhere, SC",
  email: "crotten@needs_an_email.com",
  public_repos: 6,
  public_gists: 0,
  followers: 10,
  following: 40,
  created_at: "2014-07-22T19:50:05Z",
},
{
  login: "natalie03",
  avatar_url: "https://avatars.githubusercontent.com/u/8239005?v=2",
  name: "Natalie Miller",
  location: "Charleston, SC / Louisville, KY",
  email: "you_cant@email.me",
  public_repos: 7,
  public_gists: 0,
  followers: 8,
  following: 5,
  created_at: "2014-07-22T20:01:23Z",
}
];
var profile = ""

console.log(profile);

$(document).ready(function() {
  console.log("Boom!");
  console.log(people.length);

//Creates profile page and appends it to body, takes in profile parameter
  var createCard = function(someArray, $placement) {
    for(var i=0; i < someArray.length; i++) {
      profile = "<div class=\"main\" id=\"" + i + "\">"
                      + "<img class=\"avatar-pic\" src=" + someArray[i].avatar_url + " alt=\"Avatar image\">"
                      + "<h1>" + someArray[i].name + "</h1>"
                      + "<h2>" + someArray[i].login + "</h2>"
                      + "<hr/>"
                      + "<p class=\"contact\" id=\"location\"><img src=\"http://placehold.it/15x20\" alt=\"\">" + someArray[i].location + "</p>"
                      + "<p class=\"contact\" id=\"email\"><img src=\"http://placehold.it/15x20\" alt=\"\"><a href=\"\">" + someArray[i].email + "</a></p>"
                      + "<p class=\"contact\" id=\"date-joined\"><img src=\"http://placehold.it/15x20\" alt=\"\">" + someArray[i].created_at + "</p>"
                      + "<hr/>"
                      + "<div class=\"social\">"
                        + "<div class=\"followers mini-social\">"
                          + "<p>" + someArray[i].followers + "</p>"
                          + "<p>Followers</p>"
                        + "</div>"
                        + "<div class=\"starred mini-social\">"
                          + "<p>" + someArray[i].public_gists + "</p>"
                          + "<p>Starred</p>"
                        + "</div>"
                        + "<div class=\"following mini-social\">"
                          + "<p>" + someArray[i].following + "</p>"
                          + "<p>Following</p>"
                        + "</div>"
                      + "</div>"
                    + "</div>";
      $placement.append(profile);
    };
  };

  //Generate Profile Cards
  createCard(people, $('.meat'));

  //Custimization of card color
  $("#navigator").on("mouseover", ".background-change", function() {
    var color = $(this).data("background-color");
    console.log(color);
    $(this).css("background-color", color);
    console.log("end of color funciton");
  });

  $("#navigator").on("mouseout", ".background-change", function() {
    var color = $(this).data("background-color");
    console.log(color);
    $(this).css("background-color", "black");
    console.log("end of color funciton");
  });

  $("#navigator").on("dblclick", ".background-change", function() {
    var color = $(this).data("background-color");
    console.log(color);
    $(this).closest("body").find(".main").css("background-color","teal");
    console.log("end of color funciton");
  });

  $("#navigator").on("click", ".background-change", function() {
    var color = $(this).data("background-color");
    console.log(color);
    $(this).closest("body").find(".main").css("background-color",color);
    console.log("end of color funciton");
  });


  //Customization of fonts
  $("#navigator").on("click", ".font-change", function() {
    var font = $(this).data("font-family");
    console.log(font);
    $(this).closest("body").children(".meat").children(".main").find("p").css("font-family",font);
    console.log("end of font funciton");
  });

  $("#navigator").on("dblclick", ".font-change", function() {
    var font = $(this).data("font-family");
    console.log(font);
    $(this).closest("body").children(".meat").children(".main").find("p").css("font-family","Georgia, serif");
    console.log("end of font funciton");
  });

  $("#navigator").on("mouseover", ".font-change", function() {
    var font = $(this).data("font-family");
    console.log(font);
    $(this).css("font-family",font);
    console.log("end of font funciton");
  });

  $("#navigator").on("mouseout", ".font-change", function() {
    var font = $(this).data("font-family");
    console.log(font);
    $(this).css("font-family","Georgia, serif");
    console.log("end of font funciton");
  });


  //Revealing Profiles
  $(".main").children().css("display", "none");
  $(".main").find(".avatar-pic").css("display", "block");

  $(".main").on("click", function(event) {
    event.preventDefault();
    $(this).children().slideToggle();
  })


  //Fun with Profiles
  $(".meat").on("keypress", ".main", function(event) {
    event.preventDefault();
    $(this).css("transform", "rotate(360deg)");
  })

  $(".meat").on("mouseenter", ".main", function(event) {
    event.preventDefault();
    $(this).css("transform", "scale(1.1)");
  });

  $(".meat").on("mouseleave", ".main", function(event) {
    event.preventDefault();
    $(this).css("transform", "scale(1)");
  });


  //navigation
  $("nav").find("p").on("click", "a", function(event) {
    console.log("card Color");
    var shift_location = $(this).data("position");
    $(this).css("text-decoration", "line-through");
    console.log("line-through");
  });
});
