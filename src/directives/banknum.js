import Vue from 'vue';
Vue.directive('bank', {
  inserted(elem) {
    let isDelete = false;
    elem.addEventListener('keydown', function () {
      // TODO 这里如果不是数字得拦截掉，如果是需要添加设置光标位置的方法的话，不然会导致无法复制
      isDelete = window.event.keyCode == 8; //标记用户进行删除操作
      const maxLength = elem.getAttribute('maxlength') || (19 && elem.setAttribute('maxlength', 19));
      // 得到光标的位置
      function getCursortPosition(textDom) {
        let cursorPos = 0;
        if (document.selection) {
          // IE Support
          textDom.focus();
          let selectRange = document.selection.createRange();
          selectRange.moveStart('character', -textDom.value.length);
          cursorPos = selectRange.text.length;
        } else if (textDom.setSelectionRange) {
          // webkit support
          textDom.focus();
          cursorPos = textDom.selectionStart;
        }
        return cursorPos;
      }
      // 设置光标位置
      function setCaretPosition(textDom, pos) {
        console.log('setCaretPosition', textDom, pos);
        if (textDom.setSelectionRange) {
          textDom.focus();
          textDom.setSelectionRange(pos, pos);
        } else if (textDom.createTextRange) {
          // IE Support
          let range = textDom.createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      }
      setTimeout(function () {
        let str = elem.value;
        console.log('str', str);
        let currentPos = getCursortPosition(elem);
        let posAfterText = '';
        let posPreText = '';
        let isNextBlank = false; //后面的是否是空格
        let isPreBlank = false;
        let isLastPos = true;
        //不是最后一个，这种一般用于处理复制过来的银行卡号
        if (currentPos != str.length) {
          posAfterText = str.substr(currentPos, 1);
          posPreText = str.substr(currentPos - 1, 1);
          isNextBlank = /^\s+$/.test(posAfterText);
          console.log('posAfterText', posAfterText, isNextBlank);
          isPreBlank = /^\s+$/.test(posPreText);
          isLastPos = false;
        }
        if (elem.value.length <= maxLength) {
          //最大长度控制
          elem.value = elem.value.replace(/\s/g, '').replace(/(\w{4})(?=\w)/g, '$1 ');
        }
        // 移动端可能需要设置光标位置
        // if (isDelete) {
        //   if (isPreBlank) {
        //     setCaretPosition(elem, currentPos - 1);
        //   } else {
        //     setCaretPosition(elem, currentPos);
        //   }
        // } else {
        //   console.log('isLastPos', isLastPos, isNextBlank);
        //   if (!isLastPos) {
        //     if (isNextBlank) {
        //       setCaretPosition(elem, currentPos + 1);
        //     } else {
        //       setCaretPosition(elem, currentPos);
        //     }
        //   } else {
        //     setCaretPosition(elem, elem.value.length);
        //   }
        // }
      }, 0);
    });
  },
});
