console.log("app is running!");

class App {
  $target = null;
  data = [];
  default = 'main'
  mainData = []
  d = null

  constructor($target) {
    this.$target = $target;

    this.header = new Header({ $target, data: this.d })
    this.slidemenu = new SlideMenu({ $target, data: this.d })

    this.subheader = new SubHeader({ $target })


    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(({ data }) => this.setState(data));
      }
    });


    const fetchMainData = async () => 
    {
      const mainInit = await api.fetchCats('main')
      this.setMainState(mainInit.data)
      return mainInit.data
    }

    this.mainlist = new MainList({
      $target,
      // setMainState:  initData => this.mainlist.setMainState(initData),
      setMainState: (data) => { this.mainData = data },
      onClick: (image,isClick,idx) => {
        this.imageInfo.setState({
          visible: isClick,
          image,
          idx:idx
        });
      },
      initData: fetchMainData(),
    })
    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image,isClick,idx) => {
        this.imageInfo.setState({
          visible: isClick,
          image,
          idx:idx
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
  setMainState(nextData) {
    console.log('setMainState', this)
    this.mainData = nextData
    console.log('this.mainData', this.mainData)

    this.mainlist.setMainState(nextData)
  }
}
