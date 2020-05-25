// First Page Screen Logic 

let BannerData = document.getElementById("Banner");
let selectedhtml;
const search = document.getElementById('inlineFormInputGroup');
const search_list = document.getElementById('search-list');
const searchBasket = document.getElementById('basket');
const indexedValue = document.getElementById('index_container');

const btnrcpgen = document.getElementById("btnrcpgen");

let selectedBasketValue = [];

let selectedID ;

const searchIngredients = async searchText => {
    // const res = await fetch('/json/ingredient-list.json');
    const res = await fetch('img/ingredient-list.json');
    const ingList = await res.json();

    let matches = ingList.filter(list => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return list.ingredientlist.match(regex);
    })

    if (searchText.length === 0) {
        matches = [];
        search_list.innerHTML = '';
    }

    outputsHtml(matches);

}

const outputsHtml = matches => {
    if (matches.length > 0) {

        const html = matches.map(match => `
        <div id ="${match.id}">
            <small>${match.ingredientlist}</small>
        </div>
        `).join('');

        search_list.innerHTML = html;
    }
}

search.addEventListener('input', () => searchIngredients(search.value));

const searchResult = document.getElementById('search-list');

searchResult.addEventListener('click', function (e) {

    let basketValue = document.getElementsByClassName("btn-green");
    let cnt = 0;
    e = e || window.event;
    var target = e.target || e.srcElement;
    selectedID = target.id;
    text = target.textContent || target.innerText;

    if (basketValue.length > 0){
      cnt  = 0;
        for(i=0 ;i< basketValue.length;i++){
            if (basketValue[i].textContent === text){
                cnt++;
            }
        }  
    }
    if (cnt === 0 ){
        selectedBasketValue.push(text);
        let selectedhtml = `<a class ="btn-green">${text}</a>`; 
        searchBasket.innerHTML += selectedhtml;
    }
    document.getElementById("inlineFormInputGroup").innerHTML ="";
    btnrcpgen.innerHTML = '<button class="btn btn-warning" id="btn-rcpgen"><a href="menuPage.html">Generate Recipie<a></button>';

}, false);

if(btnrcpgen){
    btnrcpgen.addEventListener('click',() => generateDynamicList());
}


const generateDynamicList = async searchText => {

    let imageData = selectedBasketValue.toString();
    sessionStorage.setItem("menuList",imageData);
 
}


