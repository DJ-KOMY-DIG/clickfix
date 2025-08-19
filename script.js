'use strict'

const checkbox = document.getElementById('check');
const copyValue = "https://dj-komy-dig.github.io/warning/";

checkbox.addEventListener('change', function() {
    // チェック状態を確認して処理を分岐
    if (this.checked) {
        copyClipboard(copyValue);
    }
});


// コピー処理
const copyClipboard = (txt) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(txt).then(
      () => {
        // alert('コピー成功👍');
      },
      () => {
        // alert('コピー失敗😭');
      });
  }
};
