//show/hide Favourite

$(".showFavourite").on(`click`, () => {
  $(".Favourite").show();
  $(".containerThree").hide(); //
});
$(".showpage").on(`click`, () => {
  $(".Favourite").hide();
  $(".containerThree").show(); //
});
//show/hide history
$(".showHistory").on(`click`, () => {
  $(".history").show();
  $(".containerThree").hide(); //
});
$(".showpage").on(`click`, () => {
  $(".history").hide();

  $(".containerThree").show(); //
});
//show/hide top
$(".showTop").on(`click`, () => {
  $(".top").show();
  $(".containerThree").hide(); //
});
$(".showpage").on(`click`, () => {
  $(".top").hide();
  $(".containerThree").show(); //
});
// new action show
$("#Action").on(`click`, () => {
  $(`.showAction`).show();
  $(".containerThree").hide();
});
$(".showpage").on(`click`, () => {
  $(`.showAction`).hide();
  $(".containerThree").show(); //
});
//......new romantic show.........//
$("#Romantic").on(`click`, () => {
  $(`.showRomantic`).show();
  $(".containerThree").hide();
});
$(".showpage").on(`click`, () => {
  $(`.showRomantic`).hide();
  $(".containerThree").show(); //
});
//....new TV show.....//
$("#TV").on(`click`, () => {
  $(`.showTV`).show();
  //$(".containerThree").hide()
});
$(".showpage").on(`click`, () => {
  $(`.showTV`).hide();
  $(".containerThree").show(); //
});
//
$("svg").on(`click`, () => {
  $(`.top`).show();
});

$(".signup").on("click",()=>{
  $(".pageLogin").show()
  massage.hide()
  $(".pageLogin").css({
    display:"flex"
  })
})
let account =[{
  user1 :"ayed",
  password:"flex"
}]

console.log();
let login = $(`#usernameL`)
let register = $(`#usernameR`)
let loginP = $(`#passwordL`)
let registerP = $(`#passwordR`)

$("#register").on("click", () => {
  $(".login").hide();
});
 
$("#back").on("click", () => {
  login.val(register.val())
  loginP.val(registerP.val())

  $(".login").show();
  
});
 
let massage = $(`<P style="color: red;">wrong password or user name</P>`)
$("#enter").on("click", () => {
if (login.val()=== register.val() && loginP.val()=== registerP.val() ) {
  $(".pageLogin").hide();

}else{
  massage.show()
  massage.appendTo($(`.face`))
}
   
  });

   


//light mode
$(`#light`).on(`click`, () => {
  $(".movieThree").css({
    "background-color": "white",
  });
  $(".movieTwo").css({
    "background-color": "white",
  });
  $(".movie").css({
    "background-color": "white",
  });
  $(".action").css({
    "background-color": "black",
  });
  $(".sub").css({
    "background-color": "white",
  });

  $("h2").css({
    "background-color": "white",
    color: "black",
  });
});
//dark mode
$(`#dark`).on(`click`, () => {
  $(".movieThree").css({
    "background-color": "black",
  });
  $(".movieTwo").css({
    "background-color": "black",
  });
  $(".movie").css({
    "background-color": "black",
  });
  $(".sub").css({
    "background-color": "black",
  });

  $("h2").css({
    "background-color": "black",
    color: "white",
  });
});


//rpi
$.ajax({
  url: "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=f[…]esc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a",
  success: function (result) {
    console.log(result.results);
 
    
//https://image.tmdb.org/t/p/w300/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg
//poster_path
//vote_average
//vote_count
//original_title

//login & register
// let account =[]

//rpi
// const settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "imdb8.p.rapidapi.com",
//     "x-rapidapi-key": "c9f36905damshb98be004b8985c3p1eb848jsn242468ddcec3"
//   }
// };

// $.ajax(settings).done(function (response) {
//   console.log(response[0].id,response[0].chartRating,response[0]);
// ;

// local storage
let favourirte = [];
let movieFavourite = $(`.movieFavourite`);
function check() {
  if (localStorage.getItem("Myfav")) {
    console.log(localStorage.getItem("Myfav"));
    favourirte = JSON.parse(localStorage.getItem("Myfav"));
  } else {
    localStorage.setItem("Myfav", JSON.stringify([]));
  }
}
check();

//remove
function clearFav() {
  localStorage.removeItem("Myfav");
}
$(`#remove`).on(`click`, () => {
  clearFav();
  location.reload();
});

//..........action......//
let star = `<i  id="star" class="bi bi-star"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></i>`;

let heart = `<i id="heart" class="bi bi-heart"><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></i>`;

let trash = `<i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></i>`;

let action = [
  {
    id: "1",
    link: "./img/GOT.jpg",
    description: "action series  war <br> IMDb 9.2",
  },
  {
    id: "2",
    link: "./img/Extraction.jpg",
    description: "action crime  thriller IMDb 6.7",
  },
  {
    id: "3",

    link: "./img/madMax.jpg",
    description: "action fury   thriller IMDb 8.1",
  },
  {
    id: "4",

    link: "./img/Inception.jpg",
    description: "action Mystery & thriller IMDb 8.8",
  },
  {
    id: "5",

    link: "./img/Tenet.png",
    description: "Horror Mystery & action IMDb 7.2",
  },
  {
    id: "6",

    link: "./img/dark.jpg",
    description: " Action Fantasy crime IMDb 9.0",
  },
];

action.forEach((element, index) => {
  const body = $(`body`);
  const movie = $(`.movie`);
  let action =
    $(` <div  class="action"><img  src="${element.link}" alt=""><div class="description">
 <p >${element.description}${star}</p>
 ${heart}
</div>
</div>`);

  $(`svg`).on("click", () => {
    console.log(element.link);
    favourirte.push({
      link: `${element.link}`,
      description: `${element.description}`,
    });
    localStorage.setItem("Myfav", JSON.stringify(favourirte));
    action.appendTo(movieFavourite);
    element.isPropagationStopped();
  });

  action.appendTo(movie);
});

//romantic
let romantic = [
  {
    link: "./img/mebeforeyou.jpg",
    description: "Romance Drama  family IMDb 7.2", //p
  },
  {
    link: "./img/Titanic.jpg",
    description: "Drama History Romance IMDb 7.8",
  },
  {
    link: "./img/Nootbook_.jpg",
    description: "Drama, Romance family  IMDb 7.8",
  },
  {
    link: "./img/la_la_land.jpg",
    description: "Musical Drama Romance  IMDb 8.0",
  },
  {
    link: "./img/AboutTime.jpg",
    description: "Romance Fantasy family IMDb 7.8",
  },
  {
    link: "./img/stars.jpg",
    description: "Romance Drama family IMDb 7.8",
  },
];

romantic.forEach((element, index) => {
  const body = $(`body`);
  const movieTwo = $(`.movieTwo`);

  const romantic =
    $(` <div class="romantic"><img src="${element.link}" alt=""><div class="description">
     <p>${element.description}${star}</p>
     ${heart}
    </div>
    </div>`);
  $(`svg`).on("click", () => {
    favourirte.push({
      link: `${element.link}`,
      description: `${element.description}`,
    });
    localStorage.setItem("Myfav", JSON.stringify(favourirte));
    romantic.appendTo(movieFavourite);
    element.isPropagationStopped();
  });
  romantic.appendTo(movieTwo);
});

//TV
let TV = [
  {
    link: "./img/friends.jpeg",
    description: "comedy series family IMDb 8.8", //p
  },
  {
    link: "./img/lacasa.jpg",
    description: "Crime. drama. Heist.  IMDb 8.2 ",
  },
  {
    link: "./img/SG.jpg",
    description: "action series family IMDb 8.1",
  },
  {
    link: "./img/GOT.jpg",
    description: `action series  war <br> IMDb 9.2`,
  },
  {
    link: "./img/Arcane.jpg",
    description: "action series fantasy IMDb 9.3",
  },
  {
    link: "./img/Witcher.jpg",
    description: "dram Adventure Fantasy IMDb 8.2",
  },
];

TV.forEach((element) => {
  const body = $(`body`);
  const movieThree = $(`.movieThree`);

  const TV =
    $(` <div class="tv"><img src="${element.link}" alt=""><div class="description">
     <p>${element.description}${star}</p>
     ${heart}
    </div>
    </div>`);
  $(`svg`).on("click", () => {
    favourirte.push({
      link: `${element.link}`,
      description: `${element.description}`,
    });
    localStorage.setItem("Myfav", JSON.stringify(favourirte));
    TV.appendTo(movieFavourite);
    element.isPropagationStopped();
  });

  TV.appendTo(movieThree);
});

//Top

for (let i = 0; i < 14; i++) {
 
let Top = [
  {
    link:`https://image.tmdb.org/t/p/w300${result.results[i].poster_path}`,
    description: `${result.results[i].original_title}<br>vote:${result.results[i].vote_count}<br>IMDb ${result.results[i].vote_average}`
  },
  
];
Top.forEach((element) => {
  const body = $(`body`);
  const topMovie = $(`.topMovie`);

  const top =
    $(` <div class="tv"><img src="${element.link}" alt=""><div class="descriptionTop">
         <p>${element.description}${star}</p>
         ${heart}
        </div>
        </div>`);

  top.appendTo(topMovie);
});


}



favourirte.forEach((element, index) => {
  const body = $(`body`);
  let movieFavourite = $(`.movieFavourite`);

  const favouriteMovie =
    $(` <div class="tv"><img src="${element.link}" alt=""><div class="description">
         <p>${element.description}</p>
         ${trash}
        </div>
        </div>`);
  $("trash").on(`click`, () => {
    favouriteMovie.remove();
    favourirte.splice(index, 1);
    if (favourirte.length > 0) {
      localStorage.setItem("Myfav", JSON.stringify(favourirte));
    } else {
      localStorage.setItem("Myfav", JSON.stringify([]));
    }
  });
  favouriteMovie.appendTo(movieFavourite);
});

},
});