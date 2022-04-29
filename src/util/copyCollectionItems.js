import axios from "axios";

async function copyCollectionItems(from, to, relation){
    const pg1 = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/${from}?pagination[pageSize]=100&pagination[page]=1`).then(res => res.data)
    const pg2 = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/${from}?pagination[pageSize]=100&pagination[page]=2`).then(res => res.data)

    const allData = pg1.data.concat(pg2.data)

    const sortData = allData.sort((a, b) => a.id - b.id)

    sortData.forEach(async (item) => {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/${to}`, {
            "data": {
                ...item.attributes,
            }
        })
    })
}


export default copyCollectionItems;
