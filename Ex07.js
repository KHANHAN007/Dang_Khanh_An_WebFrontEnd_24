let str = "";
let choice;
do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Loại bỏ khoảng trắng đầu và cuối chuỗi\n" +
        "4. Đảo ngược chuỗi\n" +
        "5. Đếm số lượng từ trong chuỗi\n" +
        "6. Tìm kiếm và thay thế ký tự\n" +
        "7. Thoát chương trình"
    );
    switch (choice) {
        case 1:
            str = prompt("Nhập chuõi");
            break;
        case 2:
            alert("Chuỗi hiện tại: " + str);
            break;
        case 3:
            alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str.trim());
            break;
        case 4:
            alert("Chuỗi sau khi đảo ngược: " + str.split("").reverse().join("")); break;
        case 5:
            alert(`Số lượng từ trong chuỗi: ${str.trim() ? str.trim().split(/\s+/).length : 0}`);
            break;
        case 6:
            let findChar = prompt("Nhập ký tự cần tìm");
            if (findChar && str.includes(findChar)) {
                let replace = prompt(`Nhập ký tự thay thế ${findChar}`);
                alert(`Chuỗi sau khi thay thế: ${str.replaceAll(findChar, replace)}`);
            }
            else
                alert("Không tìm thấy ký tự trong chuỗi");
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== 7)