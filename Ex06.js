let str = "";
let choice;
do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự\n" +
        "5. Kiểm tra chuỗi đối xứng\n" +
        "6. Viết hoa chữ cái đầu của từ\n" +
        "7. Thoát chương trình"
    );
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi");
            break;
        case 2:
            alert("Chuỗi hiện tại: " + str);
            break;
        case 3:
            alert("Độ dài của chuỗi: " + str.length);
            break;
        case 4:
            let charter = prompt("Nhập ký tự cần tìm");
            let count = 0;
            for (let char of str) {
                if (char === charter)
                    count++;
            }
            alert(`Ký tự ${charter} xuất hiện ${count} lần`);
            break;
        case 5:
            alert(str === [...str].reverse().join("") ? "Chuỗi đối xứng" : "Chuỗi không đối xứng");
            break;
        case 6:
            alert(`Chuỗi sau khi viết hoa: ${str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}`);
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
            break;
    }
} while (choice !== 7)