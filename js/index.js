const data = null;
if (data === null) {
  $(".loading").css({ display: "flex" });
} else {
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
}
$(".side-icon i").on("click", function () {
  $(this).toggleClass("fa-bars fa-xmark");
  if ($(this).hasClass("fa-xmark")) {
    $("aside").animate({ left: "0" }, 500);
    $("aside .ul-1").animate({ top: "0" }, 500);
    $("aside .ul-2").animate({ top: "0" }, 600);
    $("aside .ul-3").animate({ top: "0" }, 700);
    $("aside .ul-4").animate({ top: "0" }, 800);
    $("aside .ul-5").animate({ top: "0" }, 900);
  } else {
    $("aside").animate({ left: "-200px" }, 500);
    $("aside .ul-1").animate({ top: "100%" }, 900);
    $("aside .ul-2").animate({ top: "100%" }, 800);
    $("aside .ul-3").animate({ top: "100%" }, 600);
    $("aside .ul-4").animate({ top: "100%" }, 500);
    $("aside .ul-5").animate({ top: "100%" }, 400);
  }
});
$("aside ul li").on("click", function () {
  if ($(".side-icon i").hasClass("fa-xmark")) {
    $("aside").animate({ left: "-200px" }, 500);
    $(".side-icon i").toggleClass("fa-bars fa-xmark");
    $("aside .ul-1").animate({ top: "100%" }, 900);
    $("aside .ul-2").animate({ top: "100%" }, 800);
    $("aside .ul-3").animate({ top: "100%" }, 600);
    $("aside .ul-4").animate({ top: "100%" }, 500);
    $("aside .ul-5").animate({ top: "100%" }, 400);
  } else {
    $("aside").animate({ left: "0" }, 500);
    $(".side-icon i").toggleClass("fa-bars fa-xmark");
  }
});
var MealName;
var MealFirstL;
var mealsdata;
var namedata;
var firstLdata;
var categoryName = "";
var areaName = "";
let displayedAreas = [];
var ingredientName = "";
var mealId;
var index;

async function getmeals() {
  $(".loading").css({ display: "none" });
  var mealsresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s`
  );
  mealsdata = await mealsresponse.json();
  console.log(mealsdata);
  displaymeals();
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
}

async function getcategories() {
  $(".loading").css({ display: "flex" });
  var categoriesresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  categoriesdata = await categoriesresponse.json();
  console.log(categoriesdata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
}
async function getarea() {
  $(".loading").css({ display: "flex" });
  var arearesponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  areadata = await arearesponse.json();
  console.log(areadata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
}
getarea();
async function getingredients() {
  $(".loading").css({ display: "flex" });
  var ingredientsresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  ingredientsdata = await ingredientsresponse.json();
  console.log(ingredientsdata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
}

async function categoriesname() {
  $(".loading").css({ display: "flex" });
  var categoriesnameresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  categoriesnamedata = await categoriesnameresponse.json();
  console.log(categoriesnamedata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
  mealHtml = ``;
  for (var i = 0; i < 20; i++) {
    mealHtml += `<div class="col-md-3 mb-3 meal-info">
    <div class="br-20 inner">
    <img src="${categoriesnamedata.meals[i].strMealThumb}" alt="" class="w-100 h-100" />
    <div
    class="overlay br-20  text-center d-flex justify-content-center align-items-center"
    >
    <p class="fs-3 fw-bold" id="${categoriesnamedata.meals[i].idMeal}">${categoriesnamedata.meals[i].strMeal}</p>
    
    </div>
    </div>
    </div>`;
    $(".main").html(mealHtml);
  }
}
async function ingredientsname() {
  $(".loading").css({ display: "flex" });
  var ingredientsnameresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`
  );
  ingredientsnamedata = await ingredientsnameresponse.json();
  console.log(ingredientsnamedata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
  mealHtml = ``;
  for (var i = 0; i < 20; i++) {
    mealHtml += `<div class="col-md-3 mb-3 meal-info">
    <div class="br-20 inner">
    <img src="${ingredientsnamedata.meals[i].strMealThumb}" alt="" class="w-100 h-100" />
    <div
    class="overlay br-20  text-center d-flex justify-content-center align-items-center"
    >
    <p class="fs-3 fw-bold" id="${ingredientsnamedata.meals[i].idMeal}">${ingredientsnamedata.meals[i].strMeal}</p>
    
    </div>
    </div>
    </div>`;
    $(".main").html(mealHtml);
  }
}
ingredientsname();
async function areaname() {
  $(".loading").css({ display: "flex" });
  var areanameresponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
  );
  areanamedata = await areanameresponse.json();
  console.log(areanamedata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
  mealHtml = ``;
  for (var i = 0; i < 20; i++) {
    mealHtml += `<div class="col-md-3 mb-3 meal-info">
    <div class="br-20 inner">
    <img src="${areanamedata.meals[i].strMealThumb}" alt="" class="w-100 h-100" />
    <div
    class="overlay br-20  text-center d-flex justify-content-center align-items-center"
    >
    <p class="fs-3 fw-bold" id="${areanamedata.meals[i].idMeal}">${areanamedata.meals[i].strMeal}</p>
    </div>
    </div>
    </div>`;
    $(".main").html(mealHtml);
  }
}
mealInfo();
async function mealInfo() {
  $(".loading").css({ display: "flex" });
  var mealInforesponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  var mealInfodata = await mealInforesponse.json();
  console.log(mealInfodata);
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
  mealHtml = ``;
  for (var i = 0; i < 20; i++) {
    var ingList = [];
    var megList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const ingredient = mealInfodata.meals[0][ingredientKey];

      if (ingredient && ingredient.trim() !== "") {
        ingList.push(ingredient);
      }
    }
    for (let i = 1; i <= 20; i++) {
      const measurmentKey = `strMeasure${i}`;
      const measurment = mealInfodata.meals[0][measurmentKey];

      if (measurment && measurment.trim() !== "") {
        megList.push(measurment);
      }
    }
    const tagString = mealInfodata.meals[0].strTags;
    const tagList = [];

    if (tagString) {
      const tags = tagString
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
      for (let i = 0; i < tags.length; i++) {
        tagList.push(tags[i]);
      }
    }
    console.log(tagList);
    mealHtml += `<div class="col-md-4">
    <img src="${mealInfodata.meals[i].strMealThumb}" alt="" class="w-100 br-20 " />
    <h2 class="text-white fw-bold">${mealInfodata.meals[i].strMeal}</h2>
    </div>
    <div class="col-md-8 text-white">
    <h2>Instructions</h2>
    <p>
    ${mealInfodata.meals[i].strInstructions}
    </p>
    <h3><span class="fw-bold">Area :</span> ${mealInfodata.meals[i].strArea}</h3>
    <h3><span class="fw-bold">Category :</span>${mealInfodata.meals[i].strCategory}</h3>
    <h3>Recipes :</h3>
    <ul class="d-flex gap-2 ingredientslist flex-wrap">
    
    </ul>
    <h3>Tags :</h3>
    <ul class="d-flex gap-2 flex-wrap tagslist">
    
    </ul>
    <button class="btn btn-success "><a href="${mealInfodata.meals[i].strSource}" class="text-white">Source</a></button>
    <button class="btn btn-danger "><a href="${mealInfodata.meals[i].strYoutube}" class="text-white">Youtube</a></button>
    </div>`;
    $(".main").html(mealHtml);
    for (var i = 0; i < ingList.length; i++) {
      var li = `<li class="bg-bbblue w-fit text-black br-5 p-2">${megList[i]} ${ingList[i]}</li>`;
      $(".ingredientslist").append(li);
    }
    console.log(ingList);
    for (var i = 0; i < tagList.length; i++) {
      var tg = `<li class="bg-pink w-fit text-black br-5 p-2">${tagList[i]}</li>`;
      $(".tagslist").append(tg);
    }
    console.log(tagList);
  }
}
getmeals();
areaname();
categoriesname();
getcategories();
getingredients();

function displaymeals() {
  var meals = ``;
  for (var i = 0; i < 20; i++) {
    meals += `<div class="col-md-3 mb-3 meal-info">
    <div class="br-20 bg-white inner" >
    <img src="${mealsdata.meals[i].strMealThumb}" alt="" class="w-100" />
    <div class="overlay br-20 d-flex align-items-center">
    <p class="fs-3 fw-bold" id="${mealsdata.meals[i].idMeal}">${mealsdata.meals[i].strMeal}</p>
    </div>
    </div>
    </div>`;
    $(".main").html(meals);
  }

  $("aside .ul-2").on("click", function () {
    $(".loading").css({ display: "flex" });
    $(".search").hide();
    $(".main").show();
    meals = ``;
    for (var i = 0; i < 20; i++) {
      meals += `<div class="col-md-3 mb-3 category">
    <div class="br-20 inner">
    <img src="${categoriesdata.categories[i].strCategoryThumb}" alt="" class="w-100 h-100" />
    <div
    class="overlay br-20  text-center"
    >
    <p class="fs-3 fw-bold">${categoriesdata.categories[i].strCategory}</p>
    <p>
    ${categoriesdata.categories[i].strCategoryDescription}
    </p>
    </div>
    </div>
    </div>`;
      $(".main").html(meals);
      $(".loading").fadeOut(2000, function () {
        $("body").css({ overflow: "auto" });
      });
    }
  });
  $("aside .ul-3").on("click", function () {
    $(".loading").css({ display: "flex" });
    $(".search").hide();
    $(".main").show();
    meals = "";
    displayedAreas = [];
    for (let i = 0; i < 28; i++) {
      const area = areadata.meals[i].strArea;
      displayedAreas.push(area);
      meals += `<div class="col-md-3 mb-3 area">
    <div class="br-20 inner text-white text-center arearange">
    <i class="fa-solid fa-house-laptop fs-70"></i>
    <p class="fw-bold m-0 pt-3">${area}</p>
    </div>
    </div>`;
      
    }
    $(".main").html(meals);
    $(".loading").fadeOut(2000, function () {
      $("body").css({ overflow: "auto" });
    });
  });
  
  $("aside .ul-4").on("click", function () {
    $(".loading").css({ display: "flex" });
    $(".search").hide();
    $(".main").show();
    let meals = "";
    let displayedingredients = [];
    for (let i = 0; i < 20; i++) {
      const ingredient = ingredientsdata.meals[i].strIngredient;
      if (!displayedingredients.includes(ingredient)) {
        displayedingredients.push(ingredient);
        meals += `<div class="col-md-3 mb-3 mx-h overflow-hidden ingredient">
      <div class="br-20 inner text-white text-center">
      <i class="fa-solid fa-drumstick-bite fs-70"></i>
      <p class="fw-bold m-0 pt-3">${ingredient}</p>
      <p>${ingredientsdata.meals[i].strDescription}</p>
      </div>
      </div>`;
      }
    }

    $(".main").html(meals);
    $(".loading").fadeOut(2000, function () {
      $("body").css({ overflow: "auto" });
    });
  });
  $("aside .ul-5").on("click", function () {
    $(".loading").css({ display: "flex" });
    $(".search").hide();
    $(".main").show();
    let meals = "";
    meals = `<div class="vh-100 d-flex justify-content-center align-items-center">
  <div class="container">
  <form class="d-flex flex-column justify-content-center align-items-center gap-4 w-100">
  <div class="d-flex gap-4 w-100">
  <div class="w-100 nameInput">
  <input type="text" placeholder="Enter Your Name" class="form-control ">
  <p class="bg-rose br-5 text-center text-white p-4 mt-2 d-none">Special characters and numbers not allowed</p>
  </div>
  <div class="w-100 emailInput">
  <input type="email" placeholder="Enter Your Email" class="form-control  ">
  <p class="bg-rose br-5 text-center text-white p-4 mt-2 d-none">Email not valid *exemple@yyy.zzz</p>
  </div>
  </div>
  <div class="d-flex gap-4 w-100">
  <div class="w-100 numInput">
  <input type="tel" placeholder="Enter Your Number" class="form-control  ">
  <p class="bg-rose br-5 text-center text-white p-4 mt-2 d-none">Enter valid Phone Number</p>
  </div>
  <div class="w-100 ageInput">
  <input type="number" placeholder="Enter Your Age" class="form-control  ">
  <p class="bg-rose br-5 text-center text-white p-4 mt-2 d-none">Enter valid age</p>
  </div>
  </div>
  <div class="d-flex gap-4 w-100">
  <div class="w-100 passInput">
  <input type="password" placeholder="Enter Your Password" class="form-control  ">
  <p class="bg-rose br-5 text-center text-white p-4 mt-2 d-none">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
  </div>
  <div class="w-100 repassInput">
  <input type="password" placeholder="Re-Enter Your Password" class="form-control ">
  <p class="bg-rose br-5 text-center text-white p-4 mt-2 d-none">Enter valid repassword</p>
  </div>
  </div>
  <div class="contact-btn">
  <button class="btn btn-outline-danger w-fit disabled">Submit</button>
  </div>
  </form>
  </div>
  </div>`;
    $(".main").html(meals);
    $(".loading").fadeOut(2000, function () {
      $("body").css({ overflow: "auto" });
    });
    agev = false;
    namev = false;
    emailv = false;
    passv = false;
    repassv = false;
    numv = false;

    var nameValue;
    $(".nameInput input").on("input", function () {
      nameValue = $(".nameInput input").val();
      console.log(nameValue);
      if (validate(nameRegex, nameValue)) {
        $(".nameInput p").addClass("d-none");
        namev = true;
      } else {
        $(".nameInput p").removeClass("d-none");
        namev = false;
      }
    });
    var emailValue;
    $(".emailInput input").on("input", function () {
      emailValue = $(".emailInput input").val();
      console.log(emailValue);
      if (validate(emailRegex, emailValue)) {
        $(".emailInput p").addClass("d-none");
        emailv = true;
      } else {
        $(".emailInput p").removeClass("d-none");
        emailv = false;
      }
    });
    var numValue;
    $(".numInput input").on("input", function () {
      numValue = $(".numInput input").val();
      console.log(numValue);
      if (validate(phoneRegex, numValue)) {
        $(".numInput p").addClass("d-none");
        numv = true;
      } else {
        $(".numInput p").removeClass("d-none");
        numv = false;
      }
    });
    var passValue;
    $(".passInput input").on("input", function () {
      passValue = $(".passInput input").val();
      console.log(passValue);
      if (validate(passRegex, passValue)) {
        $(".passInput p").addClass("d-none");
        passv = true;
      } else {
        $(".passInput p").removeClass("d-none");
        passv = false;
      }
    });
    var repassValue;
    $(".repassInput input").on("input", function () {
      repassValue = $(".repassInput input").val();
      console.log(repassValue);
      if (passValue === repassValue) {
        $(".repassInput p").addClass("d-none");
        repassv = true;
      } else {
        $(".repassInput p").removeClass("d-none");
        repassv = false;
      }
    });
    var ageValue;
    $(".ageInput input").on("input", function () {
      ageValue = $(".ageInput input").val();
      console.log(ageValue);
      if (ageValue >= 0) {
        $(".ageInput p").addClass("d-none");
        agev = true;
      } else {
        $(".ageInput p").removeClass("d-none");
        agev = false;
      }
    });
    function checkAllValidations() {
      if (agev && namev && emailv && passv && repassv && numv) {
        $(".contact-btn button").removeClass("disabled");
      } else {
        $(".contact-btn button").addClass("disabled");
      }
    }
    $(
      ".ageInput input, .nameInput input, .emailInput input, .passInput input, .repassInput input, .numInput input"
    ).on("input", function () {
      checkAllValidations();
    });
  });
}
$(".main").on("click", ".category .overlay", function () {
  var index = $(this).closest(".category").index();
  categoryName = categoriesdata.categories[index].strCategory;
  console.log(categoryName);
  if ($(".side-icon i").hasClass("fa-xmark")) {
    $("aside").animate({ left: "-200px" }, 500);
    $(".side-icon i").addClass("fa-bars");
    $(".side-icon i").removeClass("fa-xmark");
  }
  categoriesname();
});
$(".main").on("click", ".area .arearange", function () {
  var index = $(this).closest(".area").index();
  areaName = displayedAreas[index];
  console.log(areaName);
  if ($(".side-icon i").hasClass("fa-xmark")) {
    $("aside").animate({ left: "-200px" }, 500);
    $(".side-icon i").addClass("fa-bars");
    $(".side-icon i").removeClass("fa-xmark");
  }
  areaname();
});
$(".main").on("click", ".ingredient ", function () {
  var index = $(this).closest(".ingredient").index();
  ingredientName = ingredientsdata.meals[index].strIngredient;
  console.log(ingredientName);
  if ($(".side-icon i").hasClass("fa-xmark")) {
    $("aside").animate({ left: "-200px" }, 500);
    $(".side-icon i").addClass("fa-bars");
    $(".side-icon i").removeClass("fa-xmark");
  }
  ingredientsname();
});
$(".main").on("click", ".meal-info ", function () {
  var p = $(this).find("p");
  mealId = p.attr("id");

  if ($(".side-icon i").hasClass("fa-xmark")) {
    $("aside").animate({ left: "-200px" }, 500);
    $(".side-icon i").addClass("fa-bars");
    $(".side-icon i").removeClass("fa-xmark");
  }
  $(".search").hide();
  $(".main").show();
  console.log(mealId);
  mealInfo();
});

var nameRegex = /^[a-zA-Z]+$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phoneRegex = /^\+?(\d[\d\-\(\)\s]{7,}\d)$/;
var passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function validate(regex, value) {
  return regex.test(value);
}

function displaymealssearch(testdata) {
  var meals = ``;
  
  for (var i = 0; i < testdata.length; i++) {
    console.log(testdata[i]);
    meals += `
          <div class="col-md-3 mb-3 meal-info">
            <div class="br-20 bg-white inner">
              <img src="${testdata[i].strMealThumb}" alt="${testdata[i].strMeal}" class="w-100" />
              <div class="overlay br-20 d-flex align-items-center">
                <p class="fs-3 fw-bold" id="${testdata[i].idMeal}">${testdata[i].strMeal}</p>
              </div>
            </div>
          </div>
        `;
  }
  $(".main").html(meals);
  console.log($(".main"));
}

async function serachbyname(term) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  response = await response.json();
  response.meals ? displaymealssearch(response.meals) : displaymealssearch([]);
}
serachbyname();
async function serachbyFletter(term) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`
  );
  response = await response.json();
  response.meals ? displaymealssearch(response.meals) : displaymealssearch([]);
}
serachbyFletter();

function showSearchInputs() {
  var searchform = `<div class="container">
<form class="d-flex gap-4 py-4">
<input type="text" onkeyup="serachbyname(this.value)" placeholder="Search By Name" class="br-5 w-100 p-2 bg-transperant text-white MealName">
<input type="text" onkeyup="serachbyFletter(this.value)" placeholder="Search By First Letter" maxlength="1" class="br-5 w-100 p-2 bg-transperant text-white MealFirstL">
</form>
</div>`;
  $(".search").show();
  $(".search").html(searchform);
  $(".main").hide();
  $(".MealName").on("input", function () {
    console.log($(this).val());
    $(".main").show();
  });
  $(".MealFirstL").on("input", function () {
    console.log($(this).val());
    $(".main").show();
  });
}

$("aside .ul-1").on("click", async function () {
  $(".loading").css({ display: "flex" });
  $("body").css({ overflow: "hidden" });
  showSearchInputs();
  $(".loading").fadeOut(2000, function () {
    $("body").css({ overflow: "auto" });
  });
});
