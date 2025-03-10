let matrix = [];
let choice;

do {
  choice = +prompt(
    `--------Menu--------\n` +
      `1. Nhập mảng 2 chiều\n` +
      `2. Hiển thị mảng 2 chiều\n` +
      `3. Tính tổng các phần tử trong mảng\n` +
      `4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n` +
      `5. Tính trung bình cộng các phần tử của một hàng cụ thể\n` +
      `6. Đảo ngược các hàng trong mảng\n` +
      `7. Thoát`
  );
  switch (choice) {
    case 1:
      let rows = +prompt("Nhập số hàng:");
      let cols = +prompt("Nhập số cột:");
      for (let i = 0; i < rows; ++i) {
        let row = [];
        for (let j = 0; j < cols; ++j) {
          row.push(i * cols + j + 1);
        }
        matrix.push(row);
      }
          alert("Mảng 2 chiều đã được nhập thành công!");
      break;
    case 2:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let output = matrix.map((row) => row.join("\t")).join("\n");
        alert(`Mảng 2 chiều:\n${output}`);
      }
      break;
    case 3:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let sum = matrix.flat().reduce((acc, num) => acc + num, 0);
        alert(`Tổng các phần tử trong mảng: ${sum}`);
      }
      break;
    case 4:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let max = matrix[0][0],
          rowIndex = 0,
          colIndex = 0;
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
              max = matrix[i][j];
              rowIndex = i;
              colIndex = j;
            }
          }
        }
        alert(`Phần tử lớn nhất: ${max} tại vị trí [${rowIndex}][${colIndex}]`);
      }
      break;
    case 5:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let rowIdx = +prompt("Nhập số thứ tự hàng (bắt đầu từ 0):");
        if (rowIdx < 0 || rowIdx >= matrix.length) alert("Hàng không hợp lệ!");
        else {
          let rowSum = matrix[rowIdx].reduce((acc, num) => acc + num, 0);
          let avg = rowSum / matrix[rowIdx].length;
          alert(`Trung bình cộng hàng ${rowIdx}: ${avg}`);
        }
      }
      break;
    case 6:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        matrix = matrix.map((row) => row.reverse());
        alert("Mảng đã được đảo ngược từng hàng!");
      }
      break;
    case 7:
      alert("Thoát chương trình!");
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
  }
} while (choice !== 7);
