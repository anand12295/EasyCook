let rid = sessionStorage.getItem("rid").replace('"','');
let recipieimageData   = document.getElementById("recipieStep");

   async function generateRecipieInfo()
{
    let imageSrc = "https://spoonacular.com/recipeImages";

    let url = `https://api.spoonacular.com/recipes/informationBulk?ids=${rid}&apiKey=df5e4a90a9fc4c64a7e534004c1d21fb`;
    const res = await fetch(url);
    const imgList = await res.json();
    let recipieTitle = imgList[0].title;
    let rimp = imgList[0].image;
    let recipeInstruction = imgList[0].summary;


    document.getElementById("title").innerHTML =recipieTitle;
    document.getElementById("rimp").innerHTML = `<img class="rcpimage" src="${rimp}">`;recipieStep
    document.getElementById("recipieStep").innerHTML  = `${recipeInstruction}`
    //outputsHtmlData(recipeInstruction);
}

    // const outputsHtmlData = (matchesFood) => {
    //     let imageSrc = "https://spoonacular.com/recipeImages";
    //     if (matchesFood.length > 0) {
    //       const htmlData = matchesFood
    //         .map(

    //           // (matchFood) => `<h4 class="StepData">${matchesFood}</h4>`
    //           (matchFood) => `${matchesFood}`
    //         )
    //         .join("");
      
    //       recipieimageData.innerHTML = htmlData;
    //     }
    //   };