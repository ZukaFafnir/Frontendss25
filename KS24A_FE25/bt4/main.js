let arr = [];
do {
    console.log(
        `1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`
    );
    let choice = parseInt(prompt(`Nhập lựa chọn`));
    switch (choice) {
        case 1:
            nhapMang();
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            console.log("Tổng các phần tử trong mảng:", tinhTongPhanTu());
            break;
        case 4:
            timPhanTuLonNhat();
            break;
        case 5:
            tinhTrungBinhHang();
            break;
        case 6:
            daoNguocHang();
            break;
        case 7:
            console.log(`Bạn chọn thoát chương trình`);
            break;
        default:
            console.log(`Lựa chọn không hợp lệ!`);
            break;
    }
} while (choice !== 7);

function nhapMang() {
    arr = [];
    let rows = parseInt(prompt("Nhập số hàng của mảng: "));
    let cols = parseInt(prompt("Nhập số cột của mảng: "));

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        console.log("Số hàng và số cột phải là số nguyên dương!");
        return;
    }

    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            let value;
            do {
                value = prompt(`Nhập phần tử tại hàng ${i}, cột ${j}: `);
                if (value === null || value.trim() === "") {
                    console.log("Không được để trống!");
                } else if (!/^-?\d+$/.test(value)) {
                    console.log("Vui lòng nhập một số nguyên hợp lệ!");
                } else {
                    arr[i][j] = parseInt(value);
                    break;
                }
            } while (true);
        }
    }
    console.log("Mảng 2 chiều nhập thành công:", arr);
}

function tinhTongPhanTu() {
    let sum = 0;
    for (let row of arr) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}
function timPhanTuLonNhat() {
    let max = arr[0][0];
    let maxIndex = [0, 0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
                maxIndex = [i, j];
            }
        }
    }
    console.log(`Phần tử lớn nhất là ${max} tại vị trí (${maxIndex[0]}, ${maxIndex[1]})`);
}
function tinhTrungBinhHang() {
    let rowIndex = parseInt(prompt("Nhập số hàng cần tính trung bình: "));
    if (isNaN(rowIndex) || rowIndex < 0 || rowIndex >= arr.length) {
        console.log("Hàng không hợp lệ!");
        return;
    }
    let sum = arr[rowIndex].reduce((a, b) => a + b, 0);
    let avg = sum / arr[rowIndex].length;
    console.log(`Trung bình cộng của hàng ${rowIndex} là ${avg}`);
}

function daoNguocHang() {
    arr.reverse();
    console.log("Mảng sau khi đảo ngược hàng:", arr);
}
