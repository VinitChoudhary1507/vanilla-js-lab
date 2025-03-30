window.onload = function () {
    const btn = document.querySelector('.btn')

    if (!btn) {
        console.error("Button element not found!");
        return;
    }
    

    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;

    
    let btnRect = btn.getBoundingClientRect();
    console.log(btnRect)
    
    // console.log(screenWidth)
    //     const p = btn.offsetWidth
    // console.log(p)
    // console.log(btnWidth)
    // console.log(btnheight)

    const btnheight = btnRect.height;
    const btnWidth = btnRect.width;


    document.onmousemove = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        // let coor = "Coordinates: (" + x + "," + y + ")";
        // console.log(coor)
        Calculation(x, y);
    }

    function Calculation(x, y) {
        let compare1 = (screenHeight - btnheight) / 2 + btnheight;
        let compare2 = (screenWidth - btnWidth) / 2 + btnWidth;
    
        let newLeft = btn.offsetLeft;
        let newTop = btn.offsetTop;
    
        if (y > compare1) newTop += 10;
        if (y < compare1) newTop -= 10;
        if (x > compare2) newLeft += 10;
        if (x < compare2) newLeft -= 10;
    
        // Prevent button from going out of the viewport
        newLeft = Math.max(0, Math.min(screenWidth - btnWidth, newLeft));
        newTop = Math.max(0, Math.min(screenHeight - btnheight, newTop));
    
        btn.style.left = `${newLeft}px`;
        btn.style.top = `${newTop}px`;
    }
    
}