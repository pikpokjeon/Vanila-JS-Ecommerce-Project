class MainList {
    $MainList = null;
    data = null;
    onClick = null;
  
    constructor({ $target, data, onClick }) {
      this.$MainList = document.createElement("div");
      this.$MainList.className = "MainList";
      $target.appendChild(this.$MainList);
  
      this.data = data;
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
            <div class="itembox">
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