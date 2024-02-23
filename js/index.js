const blob = document.getElementById("dot")
const hero = document.querySelector(".hero")


document.body.onpointermove = event => {

    const { clientX, clientY } = event;
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" })

}
