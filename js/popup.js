// popup.html の Options を押したときに option.html を別の tab で開くようにする
document.addEventListener('DOMContentLoaded', () => {
    const optionLink = document.getElementById('option-link');
    optionLink.addEventListener('click', () => {
        chrome.tabs.create({url: optionLink.href});
        console.log("Opened options in new tab.");

    });
});