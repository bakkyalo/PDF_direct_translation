document.getElementById('save-target-lang').addEventListener('click', () => {
    let targetLanguage = document.getElementById('select-target-lang').value;

    chrome.storage.sync.set( { 'targetLanguage': targetLanguage }, () => {
        // some process
        alert("Saved!");
    } );
});


// default selection を設定された値に保持
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get( 'targetLanguage', (data) => {
        if (data.targetLanguage) {
            document.getElementById('select-target-lang').value = data.targetLanguage;
        }
    });
});