document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    let modal = document.querySelector('.modal');

    modal.style.cssText = `
        display: block; 
    `;

    modal.querySelector('button').addEventListener('click', function(e) {
        
        modal.style.cssText = `
            display: none; 
        `;
    });
})