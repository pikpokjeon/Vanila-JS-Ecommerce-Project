class SubHeader {
    constructor({ $target }) {
        const $SubHeader = document.createElement("nav");
        const menu = ['HOT', 'SALE', 'PICK', 'RANK']
        const $Section = document.createElement('section')
        $Section.classList.add('menutabs')
        this.$SubHeader = $target;
        $SubHeader.appendChild($Section)
        $SubHeader.className = "SubHeader";
        $target.appendChild($SubHeader);
        menu.map((elem, idx) => {
            let navitem = document.createElement('div')
            navitem.addEventListener('click', (e) => onClick(e))
            navitem.classList.add(`main-Tab-${idx}`)
            navitem.innerText = elem
            $Section.appendChild(navitem)
        })


        const mainTaps = (idx) => {
            const result = document.querySelector(`.mainTab-${idx}`)
            return result
        }

        const onClick = (e) => {
            let val = e.target.innerText;
            setContent(val)
            main.firstElementChild.innerHTML = `<h1>${content}</h1>`
        }

       


    }
    render(){}
}

