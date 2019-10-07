var myButton = document.getElementById('myButton');

window.onscroll = function () {
    if(window.pageYOffset >= 400) {
        
        myButton.style.display = 'block';

    } else {

        myButton.style.display = 'none';

    }
};

myButton.onclick = function() {

    window.scrollTo(0, 0);

}