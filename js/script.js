let userView = window.innerHeight * 0.70;

document.addEventListener("DOMContentLoaded", initialize);
window.addEventListener("scroll", function(){
    let y = this.scrollY;
    let scrollSpeedJumbotronImg = (y * 0.22) + '%';
    let scrollSpeedJumbotronH1 = (y * 1.2) + '%';
    let scrollSpeedJumbotronP = (y * 2) + '%';
    this.document.querySelector('section#jumbotron img').style.transform = 'translateY('+ scrollSpeedJumbotronImg +')';
    this.document.querySelector('section#jumbotron h1').style.transform = 'translateY('+ scrollSpeedJumbotronH1 +')';
    this.document.querySelector('section#jumbotron p').style.transform = 'translateY('+ scrollSpeedJumbotronP +')';

    if (y >= this.document.querySelector('section#about').offsetTop - userView){
        this.document.querySelector('section#about').firstElementChild.lastElementChild.classList.add('triggered');
        this.setTimeout(function(){
            this.document.querySelector('section#about .about1').classList.add('triggered');
            this.document.querySelector('section#about .about2').classList.add('triggered');
        }, 400);
    }
    if (y >= this.document.querySelector('section#portfolio').offsetTop - userView){
        this.document.querySelector('section#portfolio').firstElementChild.lastElementChild.classList.add('triggered');
        this.setTimeout(function(){
            this.document.querySelectorAll('section#portfolio .img-thumbnail').forEach(function(item, index){
                setTimeout(function(){
                    item.classList.add('triggered');
                }, (index * 200));
            });
        }, 400);
    }
    if (y >= this.document.querySelector('section#contact').offsetTop - userView){
        this.setTimeout(function(){
            document.querySelector('section#contact').firstElementChild.lastElementChild.classList.add('triggered');
        }, 400);
    }
});   

function initialize(){    
    if (userView >= this.querySelector('section#about').offsetTop){
        this.querySelector('section#about').firstElementChild.lastElementChild.classList.add('triggered');
        window.setTimeout(function(){
            document.querySelector('section#about .about1').classList.add('triggered');
            document.querySelector('section#about .about2').classList.add('triggered');
        }, 400);
    }
    if (userView >= document.querySelector('section#portfolio').offsetTop){
        window.setTimeout(function(){
            document.querySelector('section#portfolio').firstElementChild.lastElementChild.classList.add('triggered');
            window.setTimeout(function(){
                document.querySelectorAll('section#portfolio .img-thumbnail').forEach(function(item, index){
                    setTimeout(function(){
                        item.classList.add('triggered');
                    }, (index * 200));
                });
            }, 400);
        }, 1000);
    }
    if (userView >= document.querySelector('section#contact').offsetTop){
        window.setTimeout(function(){
            document.querySelector('section#contact').firstElementChild.lastElementChild.classList.add('triggered');
        }, 2400);
    }
}