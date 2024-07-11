chrome.contextMenus.create({
    "id": "PDT-extension",
    "title": "(PDT) 選択された文字列を DeepL で翻訳する",
    "contexts": ["selection"]
});

chrome.contextMenus.onClicked.addListener( function(info, tab) {
    if (info.menuItemId === "PDT-extension") {

        // 選択された文字列
        let selectedText = info.selectionText;

        // 選択された文字列に / が含まれていたら ／ へと置き換える
        let convertedText = selectedText.replace(/\//g, "／");
        console.log(convertedText);

        // DeepL に直接飛ばす
        let deeplURL = "https://www.deepl.com/ja/translator#en/ja/"
        chrome.tabs.create({url: deeplURL + encodeURIComponent(convertedText)});
    }

});