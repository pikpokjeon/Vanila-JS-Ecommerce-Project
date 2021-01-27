class Header {
    constructor({$target}) {
      const $Header = document.createElement("nav");
      this.$Header = $target;
      this.$span = document.createElement('span')
      this.$sideTab = document.createElement('span')
      $Header.appendChild(this.$sideTab)
      this.$sideTab.innerHTML=`<button>메뉴</button>`
      this.$sideTab.className="sideMenu"
      this.$span.innerText = '고양이 입양'
      $Header.appendChild(this.$span)
      $Header.className = "Header";
      $target.appendChild($Header);

  
      $Header.addEventListener("click", e => {
        console.log('header')
      });
  
      console.log("Header created.", this);
    }
    render() {}
  }
