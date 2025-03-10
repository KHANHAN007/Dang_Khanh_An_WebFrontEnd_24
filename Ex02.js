let a = [];
let choice;
do {
  choice = +prompt(
    `------Menu------\n` +
      `1. Nhập mảng\n` +
      `2. Hiển thị mảng\n` +
      `3. Tìm các phần tử chẵn và lẻ\n` +
      `4. Tính trung bình cộng của mảng\n` +
      `5. Xóa phần tử tại vị trí chỉ định\n` +
      `6. Tìm phần tử lớn thứ hai trong mảng\n` +
      `0. Thoát chương trình\n`
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
      else {
        let ovenNum = a.filter((num) => num % 2 === 0);
        let oddNum = a.filter((num) => num%2!==0);
        alert(
          `Các phần tử là số chắn: ${ovenNum.join(" ")}\nCác phần từ là số lẽ: ${oddNum.join(" ")}`
        );
      }
      break;
    case 4:
      if (a.length === 0) alert("Mảng không có phần tử");
      else {
        alert(
          `Trung bình cộng các phần tử trong mảng: ` +
            a.reduce((sum, num) => (sum += num), 0) / a.length
        );
      }
      break;
    case 5:
      if (a.length === 0) alert("Mảng không có phần tử");
      else {
        let index = +prompt(`Nhập vị trí muốn xoá`);
        a = a.filter((num) => num !== a[index]);
        alert(`Mảng sau khi xoá: ` + a.join(", "));
      }
      break;
    case 6:
      if (a.length === 0) alert("Mảng không có phần tử");
      else {
        let max1 = -Infinity,
          max2 = -Infinity;
        for (let num of a) {
          if (num > max1) {
            max2 = max1;
            max1 = num;
          } else if (num > max2 && num !== max1) max2 = num;
        }
        alert(`Phần tử lớn thứ 2 trong mảng: ` + max2);
      }
      break;
    case 0:
      alert(`Thoát`);
  }
} while (choice !== 0);
