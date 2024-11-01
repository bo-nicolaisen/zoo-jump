
// This module is used to save and read data from the local storage of the browser.
let storageName = 'myGochi'

export default function SaveLocalStorageData(myData) {
    let mySerializedData = JSON.stringify(myData)
    localStorage.setItem(storageName, mySerializedData)
}

export function ReadLocalStorageData() {
    let mybasketstring = localStorage.getItem(storageName)
    let myBasket = JSON.parse(mybasketstring)
    return myBasket
}