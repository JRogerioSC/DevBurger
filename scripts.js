const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function showAll(productsArray) {

    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
    
           <li>
               <img src=${product.src}>
               <p> ${product.name}</p>
               <p class="item-price">R$ ${product.price}</p>
           </li>
        `

    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9 // desconto de 10% //


    }))

    showAll(newPrices)

}

function SumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor total dos itens é R$ ${totalValue}</p>
        </li>
    
        `


    console.log(totalValue)
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan === true)

    showAll(filterJustVegan)


}

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BR',
    })

    return newValue
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', SumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)