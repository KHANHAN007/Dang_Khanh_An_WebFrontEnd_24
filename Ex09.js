let str = "";
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Đếm số lượng ký tự chữ và số trong chuỗi\n" +
        "4. Chuyển đổi chữ hoa → thường, thường → hoa\n" +
        "5. Trộn lẫn với chuỗi thứ hai\n" +
        "6. Sắp xếp các từ theo độ dài\n" +
        "7. Thoát chương trình"
    );

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;
        case 2:
            alert("Chuỗi hiện tại: " + str);
            break;
        case 3:
            let letterCount = 0, digitCount = 0;
            for (let char of str) {
                if (/[a-zA-Z]/.test(char)) letterCount++;
                else if (/[0-9]/.test(char)) digitCount++;
            }
            alert(`Số lượng chữ cái: ${letterCount}\nSố lượng chữ số: ${digitCount}`);
            break;
        case 4:
            let toggledStr = "";
            for (let char of str) {
                if (char >= 'a' && char <= 'z') toggledStr += char.toUpperCase();
                else if (char >= 'A' && char <= 'Z') toggledStr += char.toLowerCase();
                else toggledStr += char;
            }
            alert("Chuỗi sau khi chuyển đổi: " + toggledStr);
            break;
        case 5:
            let str2 = prompt("Nhập chuỗi thứ hai:");
            let mixedStr = "";
            let maxLength = Math.max(str.length, str2.length);
            for (let i = 0; i < maxLength; i++) {
                if (i < str.length) mixedStr += str[i];
                if (i < str2.length) mixedStr += str2[i];
            }
            alert("Chuỗi sau khi trộn: " + mixedStr);
            break;
        case 6:
            let sortedWords = str.split(/\s+/).sort((a, b) => a.length - b.length);
            alert("Chuỗi sau khi sắp xếp: " + sortedWords.join(" "));
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 7);
