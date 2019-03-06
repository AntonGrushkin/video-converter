window.onload = () => {
    var convertBtn = document.getElementsByClassName('convert-button');
    var URLinput = document.getElementsByClassName('URL-input');

    convertBtn[0].addEventListener('click', () => {
        console.log(`URL: ${URLinput[0].value}`);
    });
}
