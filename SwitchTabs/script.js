const tabs = document.querySelectorAll(".tab");
const leftContent = document.querySelector(".left-content")
const MidContent = document.querySelector(".mid-content")
const RightContent = document.querySelector(".right-content")

for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    
    console.log(tab)
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        RightContent.style.display = "none";
        MidContent.style.display = "none";
        leftContent.style.display = "none";
        console.log(tab)
        console.log(index)
        if (index == 0) {
            leftContent.style.display = "block";
        
        }
        if (index == 1) {
            MidContent.style.display = "block";
        }
        if (index == 2) {
            RightContent.style.display = "block";
        }
            tab.classList.add("active")
    }

)
// tab.classList.remove("active")
    
}

