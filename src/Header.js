class Header {
    d = null;
    constructor({$target,data}) {
      const $Header = document.createElement("nav");
      this.$Header = $target;
      this.$span = document.createElement('span')
      this.$sideTab = document.createElement('span')
      $Header.appendChild(this.$sideTab)
      this.$sideTab.innerHTML=`<button>메뉴</button>`
      this.$sideTab.className="sideMenu"
      this.$span.innerText = '고양이 입양'
      this.d = data
      $Header.appendChild(this.$span)
      $Header.className = "Header";
      $target.appendChild($Header);
      
      this.$sideTab.addEventListener("click", e => {
      const slide = document.querySelector('.slideMenu')


      slide.classList.toggle('show')
      slide.classList.toggle('shadow')

      for(let idx = 0; idx <3; idx++)
      {
          const sub = document.querySelector(`.slides-${idx}`)
          sub.classList.toggle('show',false)
      }

      })



         


  
      console.log("Header created.", this);
    }
    render() {}
  }
