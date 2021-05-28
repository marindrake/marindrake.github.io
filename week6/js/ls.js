export function readFromLS(key) {
    console.log('readFromLS invoked');
    let localArray = JSON.parse(localStorage.getItem(key));
    return localArray;
} 

export function writeToLS(key, data) {
    console.log('writeToLS invoked');
    localStorage.setItem(key, JSON.stringify(data));
}