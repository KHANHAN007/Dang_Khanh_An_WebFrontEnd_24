let matrix = [];
let choice;
let rows = 0,
  cols = 0;

do {
  choice = +prompt(
    `--------Menu--------\n` +
      `1. Nhập mảng 2 chiều\n` +
      `2. Hiển thị mảng 2 chiều\n` +
      `3. Tính tổng các phần tử trong mảng\n` +
      `4. Tính tổng đường chéo chính\n` +
      `5. Tính tổng đường chéo phụ\n` +
      `6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)\n` +
      `7. Thoát`
  );
  switch (choice) {
    case 1:
      rows = +prompt("Nhập số hàng:");
      cols = +prompt("Nhập số cột:");
      matrix = [];
      for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
          row.push(+prompt(`Nhập phần tử [${i}][${j}]:`));
        }
        matrix.push(row);
      }
      alert("Mảng 2 chiều đã được nhập thành công!");
      break;

    case 2:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let output = matrix.map((row) => row.join(" ")).join("\n");
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
        let sum = 0;
        for (let i = 0; i < rows; ++i) {
          sum += matrix[i][i];
        }
        alert(`Tổng các phần tử đường chéo chính: ${sum}`);
      }
    case 5:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let sum = 0;
        for (let i = 0; i < rows; ++i) {
          sum += matrix[i][cols - i - 1];
        }
        alert(`Tổng các phần tử đường chéo phụ: ${sum}`);
      }
    case 6:
      if (matrix.length === 0) alert("Mảng chưa được nhập!");
      else {
        let option = prompt(
          "Bạn muốn tính trung bình cộng của hàng (H) hay cột (C)?"
        ).toUpperCase();
        if (option === "H") {
          let rowIndex = +prompt(`Nhập chỉ số hàng (0 đến ${rows - 1}):`);
          if (rowIndex >= 0 && rowIndex < rows) {
            let avg =
              matrix[rowIndex].reduce((sum, num) => sum + num, 0) / cols;
            alert(`Trung bình cộng của hàng ${rowIndex}: ${avg}`);
          } else {
            alert("Chỉ số hàng không hợp lệ!");
          }
        } else if (option === "C") {
          let colIndex = +prompt(`Nhập chỉ số cột (0 đến ${cols - 1}):`);
          if (colIndex >= 0 && colIndex < cols) {
            let sum = 0;
            for (let i = 0; i < rows; i++) {
              sum += matrix[i][colIndex];
            }
            let avg = sum / rows;
            alert(`Trung bình cộng của cột ${colIndex}: ${avg}`);
          } else {
            alert("Chỉ số cột không hợp lệ!");
          }
        } else {
          alert("Lựa chọn không hợp lệ!");
        }
      }
      break;
  }
} while (choice !== 7);
