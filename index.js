// 現在のパスワードの変数
const nowPassword = document.getElementById("now_password");
let passwordValue = "aaaaa";
nowPassword.textContent = "現在のパスワードは"+ passwordValue;

// パスワード設定失敗時のアラート機能
const add = document.createElement("p");
const sample = document.getElementById("form");
document.body.insertBefore(add,sample.nextSibling);


// ボタンを押す
document.getElementById("set_password()").onclick = function(){
    // 入力した文字を取得
    const confirmPassword = document.getElementById("confirm_password").value;
    const newPassword = document.getElementById("new_password").value;
    // 入力した文字数をカウント
    const passwordLength = newPassword.length;
    const confirmLength = confirmPassword.length;
    // 入力欄の内容をクリア
    const newInput = document.getElementById("confirm_password");
    newInput.value = "";
    const newName = document.getElementById("new_password");
    newName.value = "";
    // 警告文をクリア
    add.innerHTML = "";

    // パスワードが合っている場合
    if(confirmPassword == passwordValue){
        // 新しいパスワードを入力していない場合
        if(passwordLength === 0){
            add.innerHTML = "新しいパスワードを入力してください";
        }
        //新しいパスワードが8文字以下の場合
        else if(passwordLength < 8){
            add.innerHTML = "パスワードは8文字以上に設定してください";
            
        // 新しいパスワードが8文字以上の時
        }else{
            passwordValue = newPassword;
            nowPassword.textContent = "現在のパスワードは"+ passwordValue;
        }
    // 現在のパスワードを入れていない場合
    }else if(confirmLength == 0){
        add.innerHTML = "現在のパスワードを入力してください";
    // 現在のパスワードが間違っている場合
    }else {
        add.innerHTML = "現在のパスワードが間違っています";
    }
}

