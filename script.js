'use strict'

const checkbox = document.getElementById('check');
const copyValue = "file:///C:/Users/3169885/OneDrive%20-%20%E3%83%88%E3%83%A8%E3%82%BF%E8%87%AA%E5%8B%95%E8%BB%8A%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/02_Projects/14_JavaScript/ClickFix/werning.html";

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
