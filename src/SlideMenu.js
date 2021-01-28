
class SlideMenu {
    d = null;
    constructor({ $target, data }) {
        const $SlideMenu = document.createElement("section");
        const menu = ['Women', 'Kids', 'Men', 'Eldery']
        const submenu = ['상의', '하의', '코트', '자켓', '속옷', '악세사리']
        const $slideTabs = document.createElement('slideTabs')
        $slideTabs.classList.add('slideTabs')
        this.$SlideMenu = $target;
        this.d = data
        const tabButton = document.querySelector('.sideMenu')
        tabButton.addEventListener('click', (e) => clearData(e))
        $SlideMenu.appendChild($slideTabs)
        $SlideMenu.className = "slideMenu";
        $target.appendChild($SlideMenu);
        let isSlideOpen = true

        const createSubMenu = ({ submenu, menu }) => {
            for (let idx = 0; idx < menu.length; idx++) {
                const $maintab = document.querySelector(`.side-Tab-${idx}`)
                const $subtitle = document.createElement('ul')
                $subtitle.className = `slides-${idx}`
                $subtitle.classList.add(`slidesubmenu`)
                submenu.map((elem, idx) => {
                    let list = document.createElement('li')
                    list.classList.add(`submenu-${idx}`)
                    list.innerText = elem
                    $subtitle.appendChild(list)
                    $maintab.appendChild($subtitle)


                })
            }
        }
        function appendChild(e) {
            const slide = document.querySelector('.slideMenu')
            let isOpen = slide.classList.contains('show')

            const $subtitle = e.target.firstElementChild
            let now = Number($subtitle.className.split(' ')[0].split('-')[1])
            if (data === null) data = now
            if (data !== now) {

                const toOff = document.querySelector(`.slides-${now}`)
                toOff.classList.toggle('show')
                // $subtitle.classList.toggle('show')

                if (data !== null) {
                    const prevOff = document.querySelector(`.slides-${data}`)
                    prevOff.classList.toggle('show')
                }
                data = now
            }
            else if (data === now) {
                const toOff = document.querySelector(`.slides-${data}`)
                toOff.classList.toggle('show')
            }

        }
        menu.map((elem, idx) => {
            let navitem = document.createElement('div')
            navitem.classList.add(`side-Tab-${idx}`)
            navitem.classList.add(`side-Tab`)
            navitem.addEventListener('click', (e) => appendChild(e))

            navitem.innerText = elem
            $slideTabs.appendChild(navitem)

        })


        createSubMenu({ submenu, menu })

        function clearData(e) {
            data = null
        }

        document.addEventListener('click', (e) => {

            const slide1 = document.querySelector('.slideMenu')
            const slide2 = document.querySelector('.sideMenu')
            slide2.addEventListener('click', (e) => { isSlideOpen = true })

            if (isSlideOpen) {

                let isClickInside = slide1.contains(e.target)
                if (!isClickInside) {
                    let isReallyOpen = slide2.contains(e.target)
                    if (!isReallyOpen) {

                        slide1.classList.remove('show')
                        slide1.classList.remove('shadow')
                        isSlideOpen = true
                        const sub = document.querySelector(`.slides-${data}`)
                        if(sub)
                        {
                            sub.classList.remove('show')
                        }
                        


                    }


                }
            }
        })




    }

    render() { }
}

