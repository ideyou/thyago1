const particulas = document.querySelector('.particulas');

for(let i = 0; i < 50; i++){

    const fogo = document.createElement('div');

    fogo.classList.add('fogo');

    fogo.style.left = Math.random() * 100 + 'vw';

    fogo.style.animationDuration =
    2 + Math.random() * 5 + 's';

    fogo.style.opacity = Math.random();

    fogo.style.width =
    fogo.style.height =
    Math.random() * 10 + 5 + 'px';

    particulas.appendChild(fogo);
}

document.addEventListener('click', (e)=>{

    const impacto = document.createElement('div');

    impacto.style.position = 'fixed';

    impacto.style.left = e.clientX + 'px';

    impacto.style.top = e.clientY + 'px';

    impacto.style.width = '6px';

    impacto.style.height = '6px';

    impacto.style.borderRadius = '50%';

    impacto.style.background = 'white';

    impacto.style.boxShadow =
    '0 0 30px red';

    impacto.style.pointerEvents = 'none';

    impacto.style.zIndex = '999';

    impacto.style.transform =
    'translate(-50%,-50%)';

    document.body.appendChild(impacto);

    impacto.animate([

        {
            transform:'translate(-50%,-50%) scale(1)',
            opacity:1
        },

        {
            transform:'translate(-50%,-50%) scale(8)',
            opacity:0
        }

    ],{

        duration:500

    });

    setTimeout(()=>{

        impacto.remove();

    },500);

});