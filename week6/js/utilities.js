export function qs(selector){
    console.log(`QS initialized with ${selector}`);
    const item = document.getElementById(selector);
    return (item ? item : null);
}

export function onTouch(elementSelector, callback){
    console.log(`onTouch initialized`);
    const listenItem = qs(elementSelector);

    console.log(`listenItem is ${listenItem}`);
    listenItem.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.currentTarget.click();
    }, false);
    listenItem.addEventListener('click', () => {console.log(callback);}, false);
}