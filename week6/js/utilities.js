export function qs(selector){
    const item = document.getElementById(selector);
    return (item ? item : null);
}

export function onTouch(elementSelector, callback){
    const listenItem = qs(elementSelector);

    listenItem.addEventListener('touchend', function(event) {
        event.preventDefault();
        event.currentTarget.click();
    }, false);
    listenItem.addEventListener('click', () => {console.log(callback);}, false);
}