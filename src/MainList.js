class MainList {
    $MainList = null;
    data = null;
    onClick = null;
  
    constructor({ $target, initialData, onClick }) {
      this.$MainList = document.createElement("div");
      this.$MainList.className = "MainList";
      $target.appendChild(this.$MainList);
  
      this.data = initialData;
      this.onClick = onClick;
  
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    render() {
      this.$MainList.innerHTML = this.data
        .map(
          cat => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        )
        .join("");
  
      this.$MainList.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });
    }
  }