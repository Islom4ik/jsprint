class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.selector)

        this.top = obj.top

        this.element.style.position = 'fixed'
        this.unit = obj.unit

        this.element.style.top = this.scroll()

        window.addEventListener('scroll', () => this.scroll())
    }

    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return (window.innerHeight / 100 * this.top) - this.element.clientHeight
        }
    }

    scroll() {
        this.window = this.scrollNumber()

        if(this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px'
        }else {
            this.element.style.top = 0
        }
    }
}

const myScroll = new Scroll(
    {
        selector: '.header__nav',
        top: 100
    }
    )


const headCont = document.querySelector('.header__content h1')
     
var words = ['H', 'E', 'A', 'D', 'E', 'R', 'T', 'I', 'T', 'L', 'E']


    setTimeout(() => {
      headCont.innerHTML = words[0]
    }, 200);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1]
    }, 250);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2]
    }, 300);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3]
    }, 350);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4]
    }, 400);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4] + words[5]
    }, 450);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4] + words[5] + ' ' + words[6]
    }, 500);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4] + words[5] + ' ' + words[6] + words[7]
    }, 500);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4] + words[5] + ' ' + words[6] + words[7] + words[8]
    }, 550);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4] + words[5] + ' ' + words[6] + words[7] + words[8] + words[9]
    }, 600);    
    setTimeout(() => {
      headCont.innerHTML = words[0] + words[1] + words[2] + words[3] + words[4] + words[5] + ' ' + words[6] + words[7] + words[8] + words[9] + words[10]
    }, 650);    
    

  