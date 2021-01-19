// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let p = document.querySelectorAll("p");
let countString = (str) => (str.length > 8) ? true : false;
for (let i = 0; i < p.length; i++) {
    let content = p[i].innerText.split(" "),count = 0;
    console.log(content);
    for (let j = 0; j < content.length;j++) {
        if (countString(content[j])) {
            count++;
        } 
    }
    console.log(`đoạn văn ${i+1} có ${count}  từ có độ dài lớn hơn 8 chữ cái` );
}
// 2. Style cho các từ có độ dài lớn hơn 8 trong p1
let p1 = document.querySelector('.p1'); 
let countString2 = (str) => (str.length > 8) ? true : false;
let newContent2 = p1.innerText.split(" ");

for (let i = 0; i < newContent2.length; i++ ) {
    if (countString2(newContent2[i])) {
        newContent2[i] = `<span style="color: red"> ${newContent2[i]}</span>`
    }
}
p1.innerHTML = newContent2.join(" ");

// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!
p2.innerHTML = p2.textContent.split(" ").map(i=> i.length < 8 ? "Anh Ba đẹp trai 🤣" : i).join(" ");

// 4. Thêm src, alt, href cho ảnh, link
let image = document.body.getElementsByTagName("img")[0];
image.src = "https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
image.alt = "Sexy Girl";

let link = document.body.getElementsByClassName("a")[0];
link.href = "https://www.pexels.com/vi-vn/tim-kiem/sexy%20girl/";
link.textContent = "Ảnh Về Sexy Girl";

// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"
let table = document.body.getElementsByTagName("table")[0];    
for (let i = 0; i < table.rows.length; i++) {
    let j = Math.floor(Math.random() * table.rows.length);
    table.rows[i].cells[j].style.backgroundColor = "blue";
}