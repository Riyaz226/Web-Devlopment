let ecommerceData = [
    {
        id: 1,
        title: 'Electronic Car',
        price: 4.5,
        category: "Strom -R3",
        image: 'https://electricvehicleweb.in/wp-content/uploads/2020/04/Strom-R3-electric-car-side.jpg'
    },
    {
        id: 2,
        title: 'New Model (car)',
        price: 2.3,
        category: "Strom-R3",
        image: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg'
        },
    {
        id: 3,
        title: 'New Model 2022',
        price: 5.9,
        category: "Strom-R3",
        image: 'https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg'
    },
    {
        id: 4,
        title: 'Bike 150 ',
        price: 1.99,
         category: "Strom-3",
        image: 'https://imgd.aeplcdn.com/640x348/n/cw/ec/46756/yamaha-mt-15-front-right-three-quarter1.jpeg'
    },
    {
        id: 5,
        title: "Balsar ",
        price: 6.87,
        category: 'Strom-3',
        image: 'https://images.hindustantimes.com/auto/img/2020/05/13/600x338/indian-ftr-1200_1588172877332_1588172877642_1589370092100.jpg'
    },
    {
        id: 6,
        title: 'Yamaka',
        price: 168,
        category: 'Strom-3',
        image: 'https://images.livemint.com/img/2019/10/08/600x338/2019-10-07T102129Z_1_LYNXMPEF960L5_RTROPTP_3_HARLEY-DAVIDSON-ELECTRICBIKE_1570505064296_1570505080774.JPG'
    },
    
    {
        id: 7,
        title: ' Magnat Train ',
        price: 10.99,
        category: 'electronics',
        image:'https://images.megapixl.com/2157/21576325.jpg'
    },
    {
        id: 8,
        title: 'New York Ship 1284',
        price: 64,
       category: 'electronics',
        image: 'https://www.cruiseindustrynews.com/images/stories/wire/2020/dec/world_europa1.jpg'
    },
    {
        id: 9,
        title: 'India Airlines',
        price: 109,
        category: 'electronics',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Tarom.b737-700.yr-bgg.arp.jpg'
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


