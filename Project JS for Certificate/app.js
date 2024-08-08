function toPounds(Kilograms)
{
    let value = Kilograms * 2.20462
    return value.toFixed(3) + " lb"
}

function toKilograms(Pounds)
{
    let value = Pounds / 2.20462
    return value.toFixed(3) + " kg"
}

function toPoundsProgram() {
    let inputValue = parseFloat(document.getElementById('inputValue').value); //get id มาจาก input id="inputValue"
    if (!isNaN(inputValue)) { ///!isNaN (NaN = Not a Number) ให้ตรวจสอบว่ากรอกข้อมูลเป็นตัวเลขหรือไม่ ถ้าไม่ใช่จะเข้าสู่เงื่อนไข else
        alert(toPounds(inputValue));
    } else { //เมื่อไม่ได้กรอกข้อมูลเป็นตัวเลข else จะทำงาน
        alert("กรุณาใส่ตัวเลขที่ถูกต้อง");
    }
}

function toKilogramsProgram() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    if (!isNaN(inputValue)) {
        alert(toKilograms(inputValue))
    } else {
        alert("กรุณาใส่ตัวเลขที่ถูกต้อง");
    }
}