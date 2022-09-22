window.onload = () => {
	fetchData('cake')
};

const btn = document.querySelector('#search-btn')
let searchItem = document.getElementById('search-box')

btn.addEventListener('click',function(){
    let data  = searchItem.value;
    if(data!=''){
        fetchData(data);
    }else{
        alert('Enter Food Nae')
    }
})

searchItem.addEventListener("keyup", function(event) {

    let data  = searchItem.value;
    if (event.key === 'Enter') {
        fetchData(data);
    }

});


const fetchData = async (name) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`

    const res = await fetch(url);
    const data = await res.json();
    displayResult(data.meals)
}

const loadMealDetail = async mealId => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    alert(data.meals[0].strCategory);

}


const displayResult = (meals)=>{

    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    meals.map(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col-md-4');
        div.innerHTML = ` 
        <div class="card">
          <img src="${meal.strMealThumb}" class="img-fluid card-img-top img" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text"><b>Instruction:</b> ${meal.strInstructions}
            </p>
          </div>
        </div>`;
        searchResult.append(div);
    });

}