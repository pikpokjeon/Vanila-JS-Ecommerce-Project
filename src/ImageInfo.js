class ImageInfo {
  $imageInfo = null;
  data = null;
  isOpen = false;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
      this.$imageInfo.classList.add('show')
    } else {
    }
    document.addEventListener('click', (e) => {
      let id = this.data.image.id
      let idx = this.data.idx
      const img = document.querySelector(`.n${id}-${idx}`)
      let isClickImg = img.contains(e.target)
      let isOpen = this.$imageInfo.classList.contains('show')
      if (isOpen) {
        const imgWrapper = document.querySelector('.content-wrapper')
        let isClickInside = imgWrapper.contains(e.target)
        if (!isClickInside && !isClickImg) {
          this.$imageInfo.classList.remove('show')
        }
      }
    })


  }



}
