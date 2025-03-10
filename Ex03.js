let a = [];
let choice;
do {
  choice = +prompt(
    `--------Menu--------\n` +
      `1. Nhập mảng\n` +
      `2. Hiển thị mảng\n` +
      `3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n` +
      `4. Tính tổng và trung bình cộng của các số dương trong mảng\n` +
      `5. Đảo ngược mảng\n` +
      `6. Kiểm tra mảng có đối xứng không\n` +
      `0. Thoát`
  );
  switch (choice) {
    case 1:
      let n = +prompt("Nhập số lượng phần tử mảng");
      if (isNaN(n) || n < 1) alert(`Số lượng phần tử không hợp lệ`);
      else {
        for (let i = 0; i < n; ++i) {
          a.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
        }
        alert(`Mảng nhập vào thành công`);
      }
      break;
    case 2:
      if (a.length === 0) alert("Mảng không có phần tử");
      else alert(`Các phần tử của mảng: ` + a.join(", "));
      break;
    case 3:
      if (a.length === 0) alert("Mảng không có phần tử");
      else
        alert(
          `Phần tử lớn nhất trong mảng: ${Math.max(
            ...a
          )}\nChỉ số của nó: ${a.indexOf(Math.max(...a))}`
        );
      break;
    case 4:
      if (a.length === 0) alert("Mảng không có phần tử");
      else {
        let sum = a.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
        let count = a.filter((num) => num > 0).length;
        if (count === 0) continue;
        alert(
          `Tổng của các số dương: ` + sum + `Trung bình cộng: ` + sum / count
        );
      }
      break;
    case 5:
      alert(`Mảng khi bị đảo ngược: ` + a.reverse());
      break;
    case 6:
      alert(
        a.join(",") === [...a].reverse().join(",")
          ? "Mảng đối xứng"
          : "Mảng không đối xứng"
      );
      break;
    case 0:
      alert("Thoát");
      break;
  }
} while (choice !== 0);
