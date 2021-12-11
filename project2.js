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

// const body =$("body")
// const main =$( `.main`) //<div class="main"></div>
// main.appendTo(body)
// const page =$( `.page`)
// page.appendTo(main)
// const navbar=$(`<div class="nav">
// <div class="logo">
//     <h1>NETFLEX</h1>
// </div>
// <div class="cate">
//     <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Action</a></li>
//         <li><a href="#">Drama</a></li>
//         <li><a href="#">TV</a></li>
//     </ul>
// </div>
// <div class="sort">
// <button class="showTop">Top</button>
// <button class="showFavourite">Favourite</button>
// <button class="showHistory" >History</button>

// </div>
// </div>`)

// navbar.appendTo(page)
// مشكلة غدم عمل ازرار buttom

//FAVourirte
// let favourirte=[];

//..........action......//

let action = [
  {
    id: "1",
    link: "./img/GOT.jpg",
    description: "Lorem ipsum dolor sit amet A", //p
  },
  {
    id: "2",
    link: "./img/Extraction.jpg",
    description: "Lorem ipsum dolor sit amet B",
  },
  {
    id: "3",

    link: "./img/madMax.jpg",
    description: "Lorem ipsum dolor sit amet C",
  },
  {
    id: "4",

    link: "./img/Inception.jpg",
    description: "Lorem ipsum dolor sit amet  D",
  },
  {
    id: "5",

    link: "./img/Tenet.png",
    description: "Lorem ipsum dolor sit amet  E",
  },
  {
    id: "6",

    link: "./img/dark.jpg",
    description: "Lorem ipsum dolor sit amet  F",
  },
];

action.forEach((element, index) => {
  const body = $(`body`);
  const movie = $(`.movie`);
  
  
  let action =
    $(` <div  class="action"><img id='${element.id}' src="${element.link}" alt=""><div class="description">
 <p>${element.description}</p>
  <i id='${element.id}'  class="bi bi-heart"><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
   </svg></i>
</div>
</div>`);
$(`svg`).on("click", () => {
    addFav(element);
    element.isPropagationStopped();
  });
  
  action.appendTo(movie);
});



//romantic
let romantic = [
  {
    link: "./img/mebeforeyou.jpg",
    description: "Lorem ipsum dolor sit amet A", //p
  },
  {
    link: "./img/Titanic.jpg",
    description: "Lorem ipsum dolor sit amet B",
  },
  {
    link: "./img/Nootbook_.jpg",
    description: "Lorem ipsum dolor sit amet C",
  },
  {
    link: "./img/la_la_land.jpg",
    description: "Lorem ipsum dolor sit amet  dsf",
  },
  {
    link: "./img/AboutTime.jpg",
    description: "Lorem ipsum dolor sit amet  dsf",
  },
  {
    link: "./img/stars.jpg",
    description: "Lorem ipsum dolor sit amet  dsf",
  },
];

romantic.forEach((element,index) => {
  const body = $(`body`);
  const movieTwo = $(`.movieTwo`);

  const romantic =
    $(` <div class="romantic"><img src="${element.link}" alt=""><div class="description">
     <p>${element.description}</p>
     <i class="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
       </svg></i>
    </div>
    </div>`);
  $(`svg`).on("click", () => {
    addFav(element);
    console.log(index);
    element.isPropagationStopped();
  });
  romantic.appendTo(movieTwo);
});

//TV
let TV = [
  {
    link: "./img/friends.jpeg",
    description: "comedy series family IMDb :8.8/10", //p
  },
  {
    link: "./img/lacasa.jpg",
    description: "Crime. drama. Heist.  IMDb :8.2/10 ",
  },
  {
    link: "./img/SG.jpg",
    description: "action series family IMDb :8.1/10 ",
  },
  {
    link: "./img/GOT.jpg",
    description: `action series  war <br> IMDb :9.2/10`,
  },
  {
    link: "./img/Arcane.jpg",
    description: "action series fantasy IMDb :9.3/10",
  },
  {
    link: "./img/Witcher.jpg",
    description: "dram Adventure Fantasy IMDb :8.2/10",
  },
];

TV.forEach((element) => {
  const body = $(`body`);
  const movieThree = $(`.movieThree`);

  const TV =
    $(` <div class="tv"><img src="${element.link}" alt=""><div class="description">
     <p>${element.description}</p>
     <i class="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
         <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
       </svg></i>
    </div>
    </div>`);
  TV.appendTo(movieThree);
});


//Top
let Top = [
  {
    link: "./img/ARMY.jpg",
    description: "Lorem ipsum dolor sit amet", //p
  },
  {
    link: "./img/madMax.jpg",
    description: "Lorem ipsum dolor sit amet ",
  },
  {
    link: "./img/friends.jpeg",
    description: "Lorem ipsum dolor sit amet ",
  },
  {
    link: "./img/mebeforeyou.jpg",
    description: "Lorem ipsum dolor sit amet  dsf",
  },
  {
    link: "./img/Extraction.jpg",
    description: "Lorem ipsum dolor sit amet  dsf",
  },
  {
    link: "./img/ARMY.jpg",
    description: "Lorem ipsum dolor sit amet  dsf",
  },
];

Top.forEach((element) => {
  const body = $(`body`);
  const topMovie = $(`.topMovie`);

  const top =
    $(` <div class="tv"><img src="${element.link}" alt=""><div class="description">
         <p>${element.description}</p>
         <i class="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
           </svg></i>
        </div>
        </div>`);
  
  top.appendTo(topMovie);
});
/*Save*/

function addFav(obj) {
  alert("move was added");
  const body = $(`body`);
  const movieFavourite = $(`.movieFavourite`);
  const Favourite =
    $(` <div class="tv"><img src="${obj.link}" alt=""><div class="description">
                 <p>${obj.description}</p>
                 <i class="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                   </svg></i>
                </div>
                </div>`);
  Favourite.appendTo(movieFavourite);
}




// localstorge.setItem(' Favourite', arr)

// localstorge.getItem('Favourite')

//localstorge.setItem('Myfav', JSON.stringfy(arr))

// localstorge.getItem('Myfav')

//JSON.parse(localstorge.getItem('Myfav'))



 
