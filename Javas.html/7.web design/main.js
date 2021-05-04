let ecommerceData = [
    {
        id: 1,
        title: 'New Model 2021',
        price: 4.5,
        category: "Strom -R3",
        image: ''
    },
    {
        id: 2,
        title: 'New Model 2021',
        price: 2.3,
        category: "Strom-R3",
        image: 'https://images.app.goo.gl/CVQEZtQN2oDFh9dV9'
    },
    {
        id: 3,
        title: 'New Model 2021',
        price: 5.9,
        category: "Strom-R3",
        image: 'https://images.app.goo.gl/67RcCDDHWnedVTBo8'
    },
    {
        id: 4,
        title: 'New Model 2020 ,2021',
        price: 1.99,
         category: "Strom-3",
        image: 'https://images.app.goo.gl/bjSf9AfQ7bKEZ5qN7'
    },
    {
        id: 5,
        title: "New Model 2020 ,2021 ",
        price: 6.87,
        category: 'Strom-3',
        image: 'https://images.app.goo.gl/pKuGZbZ19zqyG5Sf9'
    },
    {
        id: 6,
        title: 'New Model 2020 ,2021',
        price: 168,
        category: 'Strom-3',
        image: 'https://images.app.goo.gl/qnpVzgcUHTpfswaT7'
    },
    {
        id: 7,
        title: 'New Model 2018 ,2019',
        price: 9.99,
         category: 'electronics',
        image: 'https://images.app.goo.gl/oRhGcE8aLcirb9Z56'
    },
    {
        id: 8,
        title: 'New Model 2018 ,2019',
        price: 10.99,
        category: 'electronics',
        image: 'https://images.app.goo.gl/DQQL4oU4A2EmupEc7'
    },
    {
        id: 9,
        title: 'New Model 2018 ,2019',
        price: 64,
       category: 'electronics',
        image: 'https://images.app.goo.gl/Vty3eyAdog5NBneCA'
    },
    {
        id: 10,
        title: 'New Model 2017 less',
        price: 109,
        category: 'electronics',
        image: 'https://images.app.goo.gl/Vty3eyAdog5NBneCA'
    },
    
]


// mens category 

const filterData = (category) => {
    let filterType
    switch (category) {
        case 'all': filterType = "all"
            break
        case 'Strom-R3': filterType = "Strom-R3"
            break
        case 'Strom-3': filterType = "Strom-3"
            break
        case 'electronic': filterType = "electronics"
            break
    }

    const filterData = () => {
        return ecommerceData.filter((item) => {
            return item.category === filterType
        })
    }

    let afterFilter
    // if category all - return entire data 
    // else filter and return only that specific data 
    if (category === 'all') {
        afterFilter = ecommerceData
    } else {
        afterFilter = filterData(filterType)
    }
    console.log(afterFilter)

    // dom creation 
    if (category !== 'all') {
        let content = document.getElementById('content')


        let newContent = document.createElement('div')
        newContent.classList.add("card-section");
        newContent.setAttribute('id', 'content')

        let c = document.getElementById('card-container')
        console.log('c', c)
        c.replaceChild(newContent, content)

        
    }
    // end dom creation
    createDOM(afterFilter)   
}

const createDOM =(arr) => {
    arr.map((item) => {
        // 1. dom elements create - img, p
        // 2. append those elements 

        let img = document.createElement('img')
        img.src = item.image
        img.alt = item.title

        console.log("img", img)

        let p = document.createElement('p')
        p.innerText = item.title

        
        let content = document.getElementById('content')
        content.appendChild(img)
        content.appendChild(p)
    })
}

const uptateDOM =(arr) => {
    let newContent = document.createElement('div')
    newContent.classList.add("card-section");
    newContent.setAttribute('id', 'content')

    let c = document.getElementById('card-container')
    console.log('c', c)
    c.replaceChild(newContent, content)
   
    arr.map((item) => {
        // 1. dom elements create - img, p
        // 2. append those elements 

        let img = document.createElement('img')
        img.src = item.image
        img.alt = item.title

        console.log("img", img)

        let p = document.createElement('p')
        p.innerText = item.title

        let copy = document.getElementById('content')
        copy.appendChild(img)
        copy.appendChild(p)
    })

}
const delete_old_stock =() =>{
       console.log('delete function called')
       ecommerceData.pop()
       console.log('after pop',ecommerceData)
       uptateDOM(ecommerceData)
}


