class MainList {
  $MainList = null;
  initData = null;
  onClick = null;
  a = null;
  isClick = false;

  constructor({ $target, initData, setMainState, onClick }) {
    this.$MainList = document.createElement("div");
    this.$MainList.className = "MainList";
    $target.appendChild(this.$MainList);

    this.initData = initData;
    this.onClick = onClick;
    this.setMainState = setMainState;
    console.log('MainList is created', initData)
    this.render();

  }


  setMainState(nextData) {
    console.log('set main state :', nextData)
    this.initData = nextData;
    this.render();
  }
  onClick(data)
  {
    this.initData = data
    this.render()
  }

  async render() {
    const a = await this.initData
    console.log(a)
    // const data = JSON.parse(this.$target)
    this.a = a

      if (a.length > 0) {
        this.$MainList.innerHTML = a.map(
            cat => `
            <div class="itembox2">
              <img src=${cat.url} alt=${cat.name} />
              <p>${cat.name}</p>
            </div>
          `
          )
          .join("")

        this.$MainList.querySelectorAll(".itembox2").forEach(($item, idx) => {
          $item.classList.add(`n${a[idx].id}-${idx}`)
          $item.addEventListener("click", () => {
            this.isClick = true
            this.onClick(a[idx],this.isClick,idx)
          })
        })

      }

    
  }
}

