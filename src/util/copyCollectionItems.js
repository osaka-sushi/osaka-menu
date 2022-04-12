import axios from "axios";

async function copyCollectionItems(from, to, relation){
    const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/${from}`)
    console.log(data)
    
    // process.exit()

    data.data.forEach(item => {
        if(!relation){
            axios.post(`${process.env.REACT_APP_SERVER_URL}/api/${to}`, {
                "data": {
                    ...item.attributes,
                }
            }).then(res => console.log(res.data))
        } else {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/api/${to}`, {
                "data": {
                    ...item.attributes,
                    relation: item.relation
                }
            }).then(res => console.log(res.data))
        }

    })

}

export default copyCollectionItems;