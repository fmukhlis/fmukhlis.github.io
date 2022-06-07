let userView = window.innerHeight * 0.70;

document.addEventListener("DOMContentLoaded", initialize);
document.querySelector('section#testimonial').addEventListener("click", function(e){
    if (e.target.classList.contains('figure-img')){
        if (e.target.classList.contains('active')) return

        document.querySelector('section#testimonial').classList.add('focusChanged');
        setTimeout(function(){
            let elementFocusLost = '';
            const parentElementFocusGained = e.target.parentElement;
            const allTargetElement = e.target.parentElement.parentElement.children;
            for(let item = 0; item < allTargetElement.length; item++){
                if (allTargetElement[item].firstElementChild.classList.contains('active')){
                    elementFocusLost = allTargetElement[item].firstElementChild;
                }
                allTargetElement[item].firstElementChild.classList.remove('active');
            }
            elementFocusLost.parentElement.insertBefore(e.target, elementFocusLost)
            parentElementFocusGained.insertBefore(elementFocusLost, parentElementFocusGained.children[0]);
            document.querySelector('section#testimonial').classList.remove('focusChanged');
            e.target.classList.add('active');
        }, 300);
    }
});   

function initialize(){    
    let x = this.scrollX;
}
