let menuListData = sessionStorage.getItem("menuList");
const recipieimageData = document.getElementById("recipieimage");
let BannerData = document.getElementById("Banner");
let imageData;
let data1,recipieID;

const generateDynamicRecipie = async (searchText) => {
  let url = `https://api.spoonacular.com/recipes/search?query=${menuListData}&apiKey=df5e4a90a9fc4c64a7e534004c1d21fb`;
  const res = await fetch(url);
  const imgList = await res.json();
  let blankData = [];
  let arrayValue = imgList.results;

  outputsHtmlData(arrayValue);

  BannerData.textContent = "Yummy Options";
};

const outputsHtmlData = (matchesFood) => {
  let imageSrc = "https://spoonacular.com/recipeImages";
  if (matchesFood.length > 0) {
    const htmlData = matchesFood
      .map(
        (matchFood) => `
        <div class ="anandImage" id =${matchFood.id}">
        <div>
            <img class="rcpimage" width = 100px height = 100px src="${imageSrc}/${matchFood.id}-90x90.jpg">
        </div>
        <div class="rcpdescription">
            <h5>${matchFood.title}</h5>
        <h6><i class="far fa-clock"></i> ${matchFood.readyInMinutes} mins </h6> 
        <div class="servingfood">
            <h6>Serving : ${matchFood.servings}</h6>
        </div>  
        </div>
    </div>
</div>`
      )
      .join("");

    recipieimageData.innerHTML = htmlData;
  }
};

// document.getElementsByClassName("anandImage").onClick = function(){
//     alert("Hello");
// }


document.addEventListener('click', function(e) {
    let pid;
    e = e || window.event;
    var target = e.target || e.srcElement;
    // let recipieID = ((target.parentElement).parentElement).id;
     data1 = target.parentElement;
     recipieID = data1.id;
    if(recipieID == ""){
      recipieID = data1.parentElement.id;
      if(recipieID ==""){
        let data2 = data1.parentElement;
        recipieID = data2.id;
      }

    }
    sessionStorage.clear();
    sessionStorage.setItem("rid",recipieID);
    window.location.href="RecipieDetail.html";
});