// option.html で Save が押されたら save する
document.getElementById('save-target-lang').addEventListener('click', () => {
    let targetLanguage = document.getElementById('select-target-lang').value;

    chrome.storage.sync.set( { 'targetLanguage': targetLanguage }, () => {
        // some process
        alert("Saved!");
    } );
});


// ユーザーのストレージに保持された値を <select> に設定する
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get( 'targetLanguage', (data) => {
        if (data.targetLanguage) {
            document.getElementById('select-target-lang').value = data.targetLanguage;
        } else {
            // 保持されてなかったらデフォルトで "ja" に設定する
            document.getElementById('select-target-lang').value = 'ja';
        }
    });
});
