// Trong JavaScript, từ khóa "this" đại diện cho đối tượng hiện tại, tức là đối tượng
// mà đoạn mã hiện tại đang được tham chiếu đến. 
// Giá trị của "this" thay đổi tùy vào ngữ cảnh sử dụng.

// Ví dụ ta có một đối tượng đơn giản là "person" với các thuộc tính là tên và tuổi. 
// Nếu ta gọi phương thức "getName" của đối tượng "person", từ khóa "this" sẽ trỏ tới đối tượng "person" đó.

var person = {
    name: "LinhLinh",
    age: 21,
    getName: function() {
      return this.name;
    }
  };
  
  console.log(person.getName()); // Output: "LinhLinh"
  