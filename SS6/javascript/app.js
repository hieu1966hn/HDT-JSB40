/*
Các kiểu dữ liệu trong Javascript:
1. String: Chuỗi
2. Number: Số 
3. Object: Đối tượng
4. Undefined: Không xác định 
5. Boolean: true// false
6. null: Rỗng (ít gặp)
*/

////// Khái niệm biến là gì?
/*
- Biến là nơi để lưu trữ giá trị
- Cú pháp khai báo biến: let/ var/ const
*/

// let kiet = "Võ Văn Kiệt";
// kiet = "No name";
// console.log(kiet);// in ra biến kiet
// const age = 14; // Khai báo hằng số

// console.log(age);// chuyện gì xảy ra?


/*
Toán tử trong JS

1. Toán tử gán
= thay đổi giá trị cho biến

2. Toán tử số học
+
-
*
/
--: giảm 1 đơn vị sau code đó
++: tăng 1 đơn vị giá trị sau đoạn code đó
3. Toán tử so sánh
>, >=
<, <=
==
===

*/
// let a = 1;
// let b = 10;
// // console.log(a - b);//
// // console.log(a++ - b); //
// console.log(a++);
// console.log(a++);
// console.log(a);


/*
Giới thiệu về khái niệm câu điều kiện if else
if( điều kiện){
  // chạy code 1
}
else {
  // chạy code 2
}

TH1: Điều kiện true => chạy code 1
TH2: Điều kiện false => chạy code 2
*/

let score = 100
if (score > 100) {
  console.log("Phá kỷ lục");
}
else if (score == 100) {
  console.log("Đạt kỷ lục");
}
else {
  console.log("Chưa đạt kỷ lục");
}


/*
Đề bài: trường thpt   đang tuyển sinh học sin cho lớp 10. Bài toán đặt ra là
người tuyển  sinh cần lọc ra những bạn nào có số điểm tướng ứng với từng
học lực là: Kém, Trung bình, khá, giỏi, xuất sắc.
- xuất sắc: 9.5 - 10đ
- Giỏi: 8 -> 9.5
- khá: 6.5 -> 8
- Trung bình:  5 -> 6.5
- Kém:  0 -> 5
*/

let diem1 = 6.5;
let diem2 = 9.1;
let diem3 = 4.9;