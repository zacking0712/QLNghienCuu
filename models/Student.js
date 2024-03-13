import Person from "./Person.js";

export default class Student extends Person {
    constructor(ID, hoTen, diaChi, email, loaiNgườiDung = "Student", diemToan, diemLy, diemHoa) {
        super(ID, hoTen, diaChi, email, loaiNgườiDung = "Student")
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    // phương thức

    diemTB = function() {
        let diemToan = parseFloat(this.diemToan);
        let diemLy = parseFloat(this.diemLy);
        let diemHoa = parseFloat(this.diemHoa);
        if (isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa)) {
            return "Chưa có điểm"
        } else {
            return `
                Điểm Toán : ${diemToan} <br>
                Điểm Lý : ${diemLy} <br>
                Điểm Hoá : ${diemHoa} <br>
                Tổng điểm trung bình : ${(diemToan + diemLy + diemHoa) / 3}
            `
        }

    }

}
