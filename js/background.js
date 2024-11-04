// 辞書、要るかどうかは分からん
/*
const contextMenusDictionary = {
    "en-us": "(PDT) Translate the selected string at DeepL",
    "en-gb": "(PDT) Translate the selected string at DeepL",
    "ja": "(PDT) 選択された文字列を DeepL で翻訳する",
    "ko": "(PDT) 선택한 문자열을 DeepL 에서 번역하기",
    "zh-hans": "(PDT) 在 DeepL 翻译所选字符串", 
    "zh-hant": "(PDT) 翻譯選取的字串 DeepL"
};
 */

// インストール時の操作
chrome.runtime.onInstalled.addListener( () => {

    // 右クリックメニューの生成
    chrome.contextMenus.create({
        "id": "PDT-extension",
        "title": "(PDT) 選択された文字列を DeepL で翻訳する",
        "contexts": ["selection"]
    });
});



chrome.contextMenus.onClicked.addListener( function(info, tab) {
    if (info.menuItemId === "PDT-extension") {

        // 選択された文字列
        let selectedText = info.selectionText;

        // 選択された文字列に / が含まれていたら ／ へと置き換える
        let convertedText = selectedText.replace(/\//g, "／");
        console.log(convertedText);

        // target Lang を取り出す
        chrome.storage.sync.get( 'targetLanguage', (data) => {
            let targetLanguage = 'ja';
            if(data.targetLanguage) targetLanguage = data.targetLanguage;
        
            // 言語の自動検出
            // どうやらピリオドが悪さするらしいので 。 に書き換えてみる
            let moreConvertedText = convertedText.replace(/\./g, "。");
            let deeplURL = "https://www.deepl.com/ja/translator/q/auto/";
            // let targetLanguage = "ja";
            chrome.tabs.create({url: deeplURL + encodeURIComponent(moreConvertedText) + "/" + targetLanguage });

        } )


        // DeepL に直接飛ばす
        /*
        let deeplURL = "https://www.deepl.com/ja/translator#en/ja/"
        chrome.tabs.create({url: deeplURL + encodeURIComponent(convertedText)});
         */

    }
});