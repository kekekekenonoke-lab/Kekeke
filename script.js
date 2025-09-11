document.addEventListener('DOMContentLoaded', () => {
    const tRexImage = document.querySelector('img[alt="ティラノサウルスの頭蓋骨"]');

    if (tRexImage) {
        tRexImage.addEventListener('click', () => {
            tRexImage.classList.add('shake');
            tRexImage.addEventListener('animationend', () => {
                tRexImage.classList.remove('shake');
            }, { once: true });
        });
    }
});
