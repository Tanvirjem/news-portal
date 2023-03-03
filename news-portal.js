const fetchCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showCategories(data.data))
};

const showCategories = data => {
    console.log(data)
    // capture categories container to append all the category links
    const categoriesContainer = document.getElementById('categories-container');
    data.news_category.forEach(singleCategory => {
        // console.log(singleCategory);
        // advanced - 1
        /*         
        categoriesContainer.innerHTML += 
        `   
        <a class="nav-link" href="#">${singleCategory?.category_name}</a>
        `
        */

        // step: 2 (recommended for all us)
        let linkContainer = document.createElement('p');
        linkContainer.innerHTML = `
        <a class="nav-link" href="#">${singleCategory.category_name}</a>
        `;
        categoriesContainer.appendChild(linkContainer);
    })
}