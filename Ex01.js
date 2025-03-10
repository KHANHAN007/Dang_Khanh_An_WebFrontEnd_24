let a = [];
let choice;
do {
  choice = +prompt(
    `-------Menu-------\n` +
      `1. Nhập mảng\n` +
      `2. Hiển thị mảng\n` +
      `3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n` +
      `4. Tính tổng các phần tử trong mảng\n` +
      `5. Tìm số lần xuất hiện của một phần tử trong mảng\n` +
      `6. Sắp xếp mảng tăng dần\n` +
      `0. Thoát chương trình\n\n` +
      `-------------------------`
  );
  switch (choice) {
    case 1:
      let n = +prompt(`Nhập số lượng phần tử của mảng`);
      for (let i = 0; i < n; ++i) {
        a.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
      }
      alert(`Mảng nhập thành công` + a.join(", "));
      break;
    case 2:
      if (a.length === 0) alert("Mảng không có phần tử");
      else alert(`Các phần tử của mảng: ` + a.join(", "));
      break;
    case 3:
      if (a.length === 0) alert("Mảng không có phần tử");
      else
        alert(
          `Phần tử lớn nhất: ${Math.max(...a)}\nPhần tử nhỏ nhất: ${Math.min(
            ...a
          )}`
        );
      break;
    case 4:
      if (a.length === 0) alert("Mảng không có phần tử");
      else
        alert(
          `Tổng các phần tử của mảng: ` +
            a.reduce((sum, num) => (sum += num), 0)
        );
      break;
    case 5:
      if (a.length === 0) alert("Mảng không có phần tử");
      else {
        let value = +prompt("Nhập phần tử cần tìm");
        let count = 0;
        for (let num of a) {
          if (num === value) count++;
        }
        alert(`Số lần xuất hiện của ${value} là: ` + count);
      }
      break;
    case 6:
      if (a.length === 0) alert("Mảng không có phần tử");
      else alert(`Mảng sắp xếp tăng dần: ` + a.sort((a, b) => a - b));
      break;
    case 0:
      alert(`Thoát`);
      break;
  }
} while (choice !== 0);
