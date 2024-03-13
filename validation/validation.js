function checkEmptyValue(value, idSpan) {
    var eleSpan = document.getElementById(idSpan);
    if (value == "") {
      eleSpan.innerHTML = "(*) Bắt buộc";
      return false;
    } else {
      eleSpan.innerHTML = "";

      return true;
    }
}

// CHeck tên

function checkName(value, idSpan) {
    const regexText = /^[a-zA-ZÀ-ỹ\s]+$/;
  
    var isValid = regexText.test(value);
  
    //   console.log(isValid);
    if (isValid) {
      document.getElementById(idSpan).innerHTML = "";
      // document.getElementById(idSpan).style.display = "none";
      return true;
    } else {
      document.getElementById(idSpan).innerHTML = "(*) Không đúng định dạng";
      return false;
    }
}

// check email
function checkEmailValue(value, idSpan) {
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // tương tác với regex để kiểm tra người dùng
    //   var isValid = value.match(regexEmail);
    var isValid = regexEmail.test(value);
    // console.log(isValid);
    if (isValid) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).innerHTML = "Email không đúng định dạng";
      return false;
    }
}