const { thisExpression } = require("@babel/types");

class SlideMenu {
    data = null
    constructor({ $target, data }) {
        const $SlideMenu = document.createElement("section");
        const menu = ['Women', 'Kids', 'Men', 'Eldery']
        if(this.data.visible){
        const $slideTabs = document.createElement('slideTabs')
        $slideTabs.classList.add('slideTabs')
        this.$SlideMenu = $target;
        this.data = data
        $SlideMenu.appendChild($slideTabs)
        $SlideMenu.className = "slideMenu";
        $target.appendChild($SlideMenu);
        menu.map((elem, idx) => {
            let navitem = document.createElement('div')
            navitem.addEventListener('click', (e) => onClick(e))
            navitem.classList.add(`main-Tab-${idx}`)
            navitem.innerText = elem
            $slideTabs.appendChild(navitem)
        })


        const slideTabs = (idx) => {
            const result = document.querySelector(`.slideTab-${idx}`)
            return result
        }

        const onClick = (e) => {
            let val = e.target.innerText;
            setContent(val)
            main.firstElementChild.innerHTML = `<h1>${content}</h1>`
        }

    }


    }

    render(){}
}

