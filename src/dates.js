export const dates = () => {
    let arr = []
    Array.from(Array(30).keys()).forEach(itm => {
        arr.push({
            description: "",
            date: itm + 1 + ""
        })
    })


    return arr;
}

