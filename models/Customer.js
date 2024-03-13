import Person from "./Person.js";

export default class Customer extends Person {
    constructor(ID, hoTen, diaChi, email,loaiNguoiDung , tenCTY, hoaDon, danhGia) {
        super(ID, hoTen, diaChi, email, loaiNguoiDung = "Customer")
        this.tenCTY = tenCTY;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;    
    }

    // Phương thức
    showInfoCus = () => {
        return `
            Tên công ty : ${this.tenCTY} <br>
            Trị giá hoá đơn ; ${this.hoaDon} <br>
            Nhận xét : ${this.danhGia}
        `
    }
}