console.log("app is running!");

class App {
  $target = null;
  data = [];
  d = null

  constructor($target) {
    this.$target = $target;

    this.header = new Header({$target,data:this.d})
    this.slidemenu = new SlideMenu({$target,data: this.d})

    this.subheader = new SubHeader({$target})

 
    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      }
    });
    this.mainlist = new MainList({$target,
      data : this.data
  })


    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.d = nextData
    this.searchResult.setState(nextData);
  }
}
