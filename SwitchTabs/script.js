const tabs = document.querySelectorAll(".tab");
const leftContent = document.querySelector(".left-content")
const MidContent = document.querySelector(".mid-content")
const RightContent = document.querySelector(".right-content")

for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
        tab.addEventListener("click", () => {
            RightContent.style.display = "none";
            MidContent.style.display = "none";
            leftContent.style.display = "none";
            console.log('hello')
            if (index == 0) {
                leftContent.style.display = "block";
            }
            if (index == 1) {
                MidContent.style.display = "block";
            }
            if (index == 2) {
                RightContent.style.display = "block";
            }

        })

}

