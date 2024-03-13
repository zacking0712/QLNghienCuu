export default class Person {
   listPerson = [];

   constructor(ID, hoTen, diaChi, email, loaiNguoiDung) {
    this.ID = ID;
    this.hoTen = hoTen;
    this.diaChi = diaChi;
    this.email = email;
    this.loaiNguoiDung = loaiNguoiDung;
   }

   addPerson = function(person) {
        this.listPerson.push(person);
   }

   deletePerson = function(index) {
      this.listPerson.splice(index, 1)
   }

   updateUser = function (user, index) {
      this.listPerson[index] = user;
    };
   
}