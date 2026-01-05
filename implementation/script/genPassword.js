function genPassword(){
    console.log("genPassword");
    const sizeOfPassword = "12";
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@,?;.:/!§ù%$£¤¨+=}°)]_[({#&<>|"

    let value = "";
    for(let index =0; index < sizeOfPassword; index++){
        let calc = Math.floor(Math.random() * chars.length);
        value += chars[calc];
    }
    console.log(value);
    document.getElementById("output").innerHTML = value;
}

function copyToClipboard(){
    let copyText = document.getElementById("output").innerHTML;
    navigator.clipboard.writeText(copyText);
}