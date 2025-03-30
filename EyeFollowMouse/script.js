const pupils = document.getElementsByClassName('pupil')
document.onmousemove=(event)=>{
    const x= event.clientX * 100/ window.innerWidth  +'%'
    const y= event.clientY * 100/ window.innerHeight+'%'
    const width= window.innerWidth;
    const w= event.clientX
    console.log("w",w)
    console.log(width)
    for (let index = 0;  index < 2; index++) {
      pupils[index].style.left=x
      pupils[index].style.top=y
        pupils[index].style.transform=`translate(-${x},-${y})`
    }
  
}