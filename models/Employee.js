import Person from "./Person.js";

export default class Employee extends Person {
    constructor(ID, hoTen, diaChi, email, loaiNguoiDung , luongNgay, soNgayLam) {
        super(ID, hoTen, diaChi, email, loaiNguoiDung = "Employee")
        this.luongNgay = luongNgay;
        this.soNgayLam = soNgayLam;
    }

    // Phương thức

    tienLuong = function() {
        return `
            Lương Ngày : ${this.luongNgay} <br>
            Số Ngày Làm : ${this.soNgayLam} <br>
            Tổng Lương : ${this.luongNgay * this.soNgayLam}
        `;
    }   

}