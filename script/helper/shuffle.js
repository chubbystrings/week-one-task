export const shuffle =  data => {
    const newData = []
    const savedNumber = []
     while(savedNumber.length < data.length) {
         const num = Math.floor(Math.random() * data.length)
        if (savedNumber.indexOf(num) === -1) {
            savedNumber.push(num)
            newData.push(data[num])
        }
     }
     return newData
}