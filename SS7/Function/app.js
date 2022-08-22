// Khai báo hàm không tham số
// function sayHello() {
//   // chạy câu lệnh trong hàm khi được gọi
//   alert("Hello World!!")
// }

// // Gọi hàm sau khi khai báo để hàm chạy
// sayHello();

// /// Khai báo hàm có tham số;
// function sum(a, b) {
//   /// In lên màn hình console
//   console.log(a + b);
// }
// /// Gọi hàm
// sum(1, 2); // In ra là: 3


// ///// Khai báo hàm có trả về giá trị
// function plus(a, b, c) {
//   // Hàm có trả về giá trị thông qua từ khóa return
//   return a + b + c;
// }

// let finalPlus = plus(1, 2, 3); // 6;
// console.log("finalPlus: ", finalPlus); //// 6



/////// Xây dựng hàm kiểm tra năm nhuận
function kiemTraNamNhuan(year) {

  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return year + " là năm nhuận";
  } else {
    return year + " không phải là năm nhuận"
  }
}



console.log(kiemTraNamNhuan(2012));