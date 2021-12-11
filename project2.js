

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
let favourirte=[];
let movieFavourite =$(`.movieFavourite`)
function check() {
    if (localStorage.getItem('Myfav')) {
        console.log(localStorage.getItem('Myfav'));
        favourirte = JSON.parse(localStorage.getItem('Myfav'));
    }
    else
    {
        localStorage.setItem('Myfav',JSON.stringify([]));
    }
}
check()

function clearFav() {
    localStorage.removeItem('Myfav')
}
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
 

//..........action......//



let action = [
  {
    id: "1",
    link: "./img/GOT.jpg",
    description: "action series  war <br> IMDb :9.2/10", //p
  },
  {
    id: "2",
    link: "./img/Extraction.jpg",
    description: "action crime  thriller IMDb :6.7/10",
  },
  {
    id: "3",

    link: "./img/madMax.jpg",
    description: "action fury   thriller IMDb :8.1/10",
  },
  {
    id: "4",

    link: "./img/Inception.jpg",
    description: "action Mystery & thriller IMDb :8.8/10",
  },
  {
    id: "5",

    link: "./img/Tenet.png",
    description: "Horror Mystery & action IMDb :7.2/10",
  },
  {
    id: "6",

    link: "./img/dark.jpg",
    description: " Action Fantasy crime IMDb :9/10",
  },
];

action.forEach((element, index) => {
  const body = $(`body`);
  const movie = $(`.movie`);
  


  

  let action =
    $(` <div  class="action"><img  src="${element.link}" alt=""><div class="description">
 <p >${element.description}</p>
  <i class="bi bi-heart"><svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
     <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
   </svg></i>
</div>
</div>`);

$(`svg`).on("click", () => {
  
    favourirte.push({
        link:`${element.link}`,
        description:`${element.description}`
        
        
    })
    localStorage.setItem('Myfav', JSON.stringify(favourirte))
    action.appendTo(movieFavourite)
    element.isPropagationStopped()
    
   
  });

  
  action.appendTo(movie);
});


//romantic
let romantic = [
  {
    link: "./img/mebeforeyou.jpg",
    description: "Romance Drama  family IMDb :7.2/10", //p
  },
  {
    link: "./img/Titanic.jpg",
    description: "Drama History Romance IMDb :7.8/10",
  },
  {
    link: "./img/Nootbook_.jpg",
    description: "Drama, Romance family  IMDb :7.8/10",
  },
  {
    link: "./img/la_la_land.jpg",
    description: "Musical Drama Romance  IMDb :8/10",
  },
  {
    link: "./img/AboutTime.jpg",
    description: "Romance Fantasy family IMDb :7.8/10",
  },
  {
    link: "./img/stars.jpg",
    description: "Romance Drama family IMDb :7.8/10",
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
    favourirte.push({
        link:`${element.link}`,
        description:`${element.description}`
        
        
    })
    localStorage.setItem('Myfav', JSON.stringify(favourirte))
    romantic.appendTo(movieFavourite)
    element.isPropagationStopped()
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
    $(`svg`).on("click", () => {
        favourirte.push({
            link:`${element.link}`,
            description:`${element.description}`
            
            
        })
        localStorage.setItem('Myfav', JSON.stringify(favourirte))
        TV.appendTo(movieFavourite)
        element.isPropagationStopped()
      });
    

  TV.appendTo(movieThree);
});


//Top
let Top = [
  {
    link: "./img/dark.jpg",
    description: "Action Fantasy crime IMDb :9/10", //p
  },
  {
    link: "./img/Inception.jpg",
    description: "action Mystery & thriller IMDb :8.8/10",
  },
  {
    link: "./img/la_la_land.jpg",
    description: "Musical Drama Romance  IMDb :8/10",
  },
  {
    link: "./img/Nootbook_.jpg",
    description: "Drama, Romance family  IMDb :7.8/10",
  },
  {
    link: "./img/GOT.jpg",
    description: "Laction series  war <br> IMDb :9.2/10",
  },
  {
    link: "./img/friends.jpeg",
    description: "comedy series family IMDb :8.8/10",
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



//FAVourirte
    // let favourirte=[
    //     {
    //         link: "./img/friends.jpeg",
    //         description: "comedy series family IMDb :8.8/10",
    //       },
    // ]
    

    favourirte.forEach((element,index)=>{
        const body =$(`body`)
        let movieFavourite =$(`.movieFavourite`)
        
         const Favourite=$(` <div class="tv"><img src="${element.link}" alt=""><div class="description">
         <p>${element.description}</p>
         <i class="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
           </svg></i>
        </div>
        </div>`)
        $("svg").on(`click`,()=>{ //edit 
            Favourite.remove()
            favourirte.splice(index,1)
            if (favourirte.length>0) {
                localStorage.setItem("Myfav",JSON.stringify(favourirte))
            }else{
                localStorage.setItem("Myfav",JSON.stringify([]))
            }
            
        //    
        //    
        })
        
        Favourite.appendTo(movieFavourite)
        })


    


//old
// function addFav(obj) {
//   alert("move was added");
//   const body = $(`body`);
//   const movieFavourite = $(`.movieFavourite`);
//   const Favourite =
//     $(` <div class="tv"><img src="${obj.link}" alt=""><div class="description">
//                  <p>${obj.description}</p>
//                  <i class="bi bi-heart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
//                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
//                    </svg></i>
//                 </div>
//                 </div>`);
//   Favourite.appendTo(movieFavourite);
// }


// $(`svg`).on("click", () => {
//     addFav(element);
//     console.log(index);
//     element.isPropagationStopped();




// localstorge.setItem(' Favourite', arr)

// localstorge.getItem('Favourite')

//localstorge.setItem('Myfav', JSON.stringfy(arr))

// localstorge.getItem('Myfav')

//JSON.parse(localstorge.getItem('Myfav'))


// save 2
