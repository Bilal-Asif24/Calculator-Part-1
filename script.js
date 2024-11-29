function getHistory(){
    return document.getElementById("history-value").
    innerText;//get history
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;//display hist
}
function getOutput() {
    return document.getElementById("output-value").
    innerText;//get output
}
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText
        = num;
    }
    else {
        document.getElementById("output-value").innerText
            = getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
}