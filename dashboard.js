star = document.querySelectorAll('.fa-star');
// console.log(star);
star.forEach((w) => {
    w.style.color = 'black'
})



star.forEach((q) => {
    q.addEventListener('click', (e) => {
        if(q.style.color === 'rgb(250,204,21)') {
            q.style.color = 'black';
        } else {
            q.style.color = 'rgb(250,204,21)';
        }
    })
})
