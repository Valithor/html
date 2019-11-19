function isEmpty(str) {
    return (!str || str.length === 0);
}

function validate(form) {
    checkStringAndFocus(form.elements["f_imie"], "Błędne imie");
    checkStringAndFocus(form.elements["f_nazwisko"], "Błędne nazwisko");
    checkEmailRegEx(form.elements["f_email"], "Błędny email");
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        startTimer(errorFieldName);
        return false;
    } else return true;
}

function checkEmailRegEx(obj, msg) {
    var str = obj.value;
    var email = /[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]/;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (email.test(str)) return true; else document.getElementById(errorFieldName).innerHTML = msg;
    obj.focus();
    startTimer(errorFieldName);
    return false;
}

errorField = "";

function startTimer(fName) {
    errorField = fName;

    window.setTimeout("clearError(errorField)", 3000);
}

function clearError(objName) {
    document.getElementById(objName).innerHTML = "";
}
