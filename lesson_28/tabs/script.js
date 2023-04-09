const tabsBtn = document.querySelectorAll(".tab");
const articles = document.querySelectorAll(".content");

tabsBtn.forEach((tab) => {
    tab.addEventListener("click", function(){
        const currentTab = tab // save active tab
        const id = currentTab.dataset.id;
        console.log(id);
        // delete active class (tab)
        tabsBtn.forEach((btn) => {
            btn.classList.remove("active"); 
        })
        // add active needed btn
        currentTab.classList.add("active")
        // delete active class (content)
        articles.forEach((article) => {
            article.classList.remove("active"); 
        })
        // add active needed content
        let elment = document.getElementById(id);   
        elment.classList.add("active");
    })
    
})