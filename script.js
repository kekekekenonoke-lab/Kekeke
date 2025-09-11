document.addEventListener('DOMContentLoaded', () => {
    const tRexImage = document.querySelector('img[alt="新しいティラノサウルスの画像"]'); // Updated alt text

    if (tRexImage) {
        tRexImage.addEventListener('click', () => {
            tRexImage.classList.add('shake');
            tRexImage.addEventListener('animationend', () => {
                tRexImage.classList.remove('shake');
            }, { once: true });
        });
    }

    // Falling leaves effect
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // Randomize starting position and size
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        leaf.style.transform = `scale(${Math.random() * 0.5 + 0.5})`; // Random size

        // Randomize animation duration
        const duration = Math.random() * 5 + 5; // 5 to 10 seconds
        leaf.style.animationDuration = duration + 's';

        document.body.appendChild(leaf);

        // Remove leaf after animation ends
        leaf.addEventListener('animationend', () => {
            leaf.remove();
        });
    }

    // Create a new leaf every 0.5 seconds
    setInterval(createLeaf, 500);
});