async function showAvatar() {
    // Đọc thông tin sinh viên
    let apiResponse = await fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students/1');
    let apiUser = await apiResponse.json();

    // Hiển thị hình đại diện
    let img = document.createElement('img');
    img.src = apiUser.avatar;
    document.body.append(img);

    // Chờ 10 giây
    let wait10s = new Promise((resolve, reject) => setTimeout(resolve, 10000));
    await wait10s;

    // Xóa hình đại diện
    img.remove();
    
    return apiUser;
}

showAvatar();
