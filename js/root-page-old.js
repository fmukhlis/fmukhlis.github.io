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

// Event untuk DropdownMenu Navbar
    let dropdownElement = '';
    const liDropdown = document.querySelectorAll('li.dropdown');
    liDropdown.forEach(el => {
        el.firstElementChild.addEventListener('click', function(evt) {
            if(window.getComputedStyle(document.querySelector('#hidingNavElement')).display == 'none') {
                evt.preventDefault();
                return;
            }
            let sameElement = false;
            liDropdown.forEach(elem => {
                if(elem.firstElementChild.classList.contains('show')) {
                    elem.firstElementChild.classList.remove('show');
                    if(elem == el) sameElement = true;
                }
            });
            if(sameElement) return;
            el.firstElementChild.classList.add('show');
        });
        el.firstElementChild.addEventListener("mouseover", () => {
            if(window.getComputedStyle(document.querySelector('#hidingNavElement')).display != 'none') return;
            dropdownElement = el.firstElementChild;
            el.firstElementChild.classList.add('show');
        });
        el.firstElementChild.addEventListener("mouseleave", () => {
            if(window.getComputedStyle(document.querySelector('#hidingNavElement')).display != 'none') return;
            setTimeout(() => {
                if(dropdownElement == el.lastElementChild) return;
                el.firstElementChild.firstElementChild.classList.remove('slideDown');
                el.firstElementChild.classList.remove('show');
            }, 10);
        });
        el.lastElementChild.addEventListener("mouseover", () => {
            if(window.getComputedStyle(document.querySelector('#hidingNavElement')).display != 'none') return;
            dropdownElement = el.lastElementChild;
        });
        el.lastElementChild.addEventListener("mouseleave", () => {
            if(window.getComputedStyle(document.querySelector('#hidingNavElement')).display != 'none') return;
            setTimeout(() => {
                if(dropdownElement == el.firstElementChild) return;
                dropdownElement = '';
                el.firstElementChild.firstElementChild.classList.remove('slideDown');
                el.firstElementChild.classList.remove('show');
            }, 10);
        });
    });
// End



// // Event untuk ToggleButton Navbar
document.querySelector('button.navbar-toggler').addEventListener("click", function(){
    this.classList.toggle('expanded');
    // const navbarCollapse = this.nextElementSibling.classList;
    // if(this.classList.contains('expanded')){
    //     navbarCollapse.add('navbar-show');
    // }else{
    //     navbarCollapse.remove('navbar-show');
    // }
});   
// // End



function initialize(){    
    let x = this.scrollX;
}
