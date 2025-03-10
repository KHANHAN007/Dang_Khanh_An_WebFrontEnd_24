let str = "";
let choice;

do {
  choice = +prompt(
    `--------Menu--------\n` +
      `1. Nhập chuỗi ký tự\n` +
      `2. Hiển thị chuỗi ký tự\n` +
      `3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n` +
      `4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n` +
      `5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n` +
      `6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n` +
      `7. Thoát chương trình`
  );

  switch (choice) {
    case 1:
      str = prompt("Nhập chuỗi ký tự:");
      alert("Chuỗi đã được nhập thành công!");
      break;

    case 2:
      alert(str ? `Chuỗi hiện tại: ${str}` : "Chưa có chuỗi nào được nhập!");
      break;

    case 3:
      if (!str) alert("Chưa có chuỗi nào được nhập!");
      else {
        let words = str.toLowerCase().split(/\W+/).filter(Boolean);
        let wordCount = [];
        words.forEach((word) => {
          wordCount[word] = (wordCount[word] || 0) + 1;
        });
        let result = Object.entries(wordCount)
          .map(([word, count]) => `${word}: ${count}`)
          .join("\n");
        alert(result || "Không có từ lặp lại trong chuỗi");
      }
      break;

    case 4:
      if (!str) alert("Chưa có chuỗi nào được nhập!");
      else {
        let words = str.split(/\W+/).filter(Boolean);
        let maxWord = words.reduce(
          (max, word) => (word.length > max.length ? word : max),
          ""
        );
        let minWord = words.reduce(
          (min, word) => (word.length < min.length ? word : min),
          words[0]
        );
        alert(`Từ dài nhất: ${maxWord}\nTừ ngắn nhất: ${minWord}`);
      }
      break;

    case 5:
      if (!str) alert("Chưa có chuỗi nào được nhập!");
      else {
        let charCount = {};
        for (let char of str.replace(/\s+/g, "")) {
          charCount[char] = (charCount[char] || 0) + 1;
        }
        let maxFreq = Math.max(...Object.values(charCount));
        let mostFrequentChars = Object.keys(charCount).filter(
          (char) => charCount[char] === maxFreq
        );
        alert(
          `Ký tự xuất hiện nhiều nhất: ${mostFrequentChars.join(
            ", "
          )} với ${maxFreq} lần`
        );
      }
      break;

    case 6:
      if (!str) alert("Chưa có chuỗi nào được nhập!");
      else {
        let snakeCase = str.toLowerCase().trim().replace(/\W+/g, "_");
        alert(`Chuỗi dạng snake_case: ${snakeCase}`);
      }
      break;

    case 7:
      alert("Thoát chương trình");
      break;

    default:
      alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
  }
} while (choice !== 7);
