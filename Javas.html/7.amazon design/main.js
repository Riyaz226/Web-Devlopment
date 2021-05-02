const filterData =(category)=> {
    let filterType
    switch(category){
        
        case 'all': filterType ="all"
        break
        
        case 'men': filterType ="MEN 1<br/>(shirt)"
        break
        
        case 'women': filterType ="WOMEN 1<br/>(saree)"
        break
        
        case 'child': filterType ="GIRLS<br/>(genus)"
        break
    }
    const filterData =() =>{
        return box.filter((item) =>{
            return item.category === filterType
        } )
    }
}