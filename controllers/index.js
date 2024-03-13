import Student from "../models/Student.js"
import Employee from "../models/Employee.js"
import Customer from "../models/Customer.js"
import Person from "../models/Person.js"

// Tạo input phù hợp với loại người dùng

let select = document.querySelector("form select")
let student = document.querySelectorAll(".student_group")
let employee = document.querySelectorAll(".employee_group")
let customer = document.querySelectorAll(".customer_group")

select.addEventListener("change", () => {
    // console.log(value)
    let value = document.querySelector("form select").value;
    console.log(value)
    switch(value) {
        case "1": {
            student.forEach(item => {
                item.style.display = "block";
            });
            employee.forEach(item => {
                item.style.display = "none";
            });
            customer.forEach(item => {
                item.style.display = "none";
            });
            break;
        }
        case "2": {
            student.forEach(item => {
                item.style.display = "none";
            });
            employee.forEach(item => {
                item.style.display = "block";
            });
            customer.forEach(item => {
                item.style.display = "none";
            });
            break;
        }
        case "3": {
            student.forEach(item => {
                item.style.display = "none";
            });
            employee.forEach(item => {
                item.style.display = "none";
            });
            customer.forEach(item => {
                item.style.display = "block";
            });
            break;
        }
    }
} )

const person = new Person()
document.getElementById("btnAdd").onclick = () => {
    const arrField = document.querySelectorAll("form input, form select , form textarea")
    // console.log(arrField)
    let value = document.querySelector("form select").value;
    console.log(value)
    let listUser = person.listPerson
    switch(value) {
        case "1": {
            const userStudent = new Student();
            arrField.forEach((item, index) => {
                let { id, value } = item;
                console.log(id)
                console.log(value)
                userStudent[id] = value;
            }) 
            person.addPerson(userStudent)
            // console.table(person.listPerson)
            console.log(value)
            renderTemplate(value)
            saveDataLocal()
            break;
        }

        case "2": {
            const userEmployee = new Employee();
            arrField.forEach((item, index) => {
                let { id, value } = item;
                console.log(id)
                console.log(value)
                userEmployee[id] = value;
            }) 
            person.addPerson(userEmployee)
            // console.table(person.listPerson)
            console.log(value)
            renderTemplate()
            saveDataLocal()
            break
        }

        case "3": {
            const userCustomer = new Customer();
            arrField.forEach((item, index) => {
                let { id, value } = item;
                console.log(id)
                console.log(value)
                userCustomer[id] = value;
            }) 
            person.addPerson(userCustomer)
            // console.table(person.listPerson)
            console.log(value)
            renderTemplate(value)
            saveDataLocal()
            break
        }
    }

    
}
// loai nguoi dung, co cac gia tri nao Khoa
// em đặt loại người dùng là tên lun á chị
// còn cái case em đặt là value của cái thẻ select á chị
// code render ban đầu của em phụ thuộc vào "value của cái thẻ select" => khi mảng chạy vòng lặp, tất cả item bên trong đều sẽ render theo template "value của cái thẻ select"
// => phải check theo loainguoidung cua tung item de renđer moi dung
// dạ vậy em hiểu rồi chị

const renderTemplate = (valueSelect ,arrUser = person.listPerson) => {
    console.log('valueSelect',valueSelect)
    console.log("arrUser",arrUser);
    let content = "";
    arrUser.forEach((item, index) => {
        console.log('item',item)
        switch(item.loaiNguoiDung) {
            case "Student": {
                let newStudent = new Student();
                Object.assign(newStudent, item)
                const {ID, hoTen, diaChi, email, loaiNguoiDung} = newStudent;
                content += `
                    <tr>
                        <td>${ID}</td>     
                        <td>${hoTen}</td>     
                        <td>${diaChi}</td>     
                        <td>${email}</td>     
                        <td>${loaiNguoiDung}</td>     
                        <td>${newStudent.diemTB()}</td>     
                        <td>
                            <button onclick="deleteUser(' ${ID}')" data-id='${ID}' class="btn btn-danger">Delete</button>
                            <button onclick="getUser('${ID}')" class="btn btn-warning">Edit</button>
                        </td>     
                    </tr>
                `
                break;
            }
            case "Employee": {
                let newEmployee = new Employee();
                Object.assign(newEmployee, item)
                const {ID, hoTen, diaChi, email, loaiNguoiDung} = newEmployee;
                content += `
                    <tr>
                        <td>${ID}</td>     
                        <td>${hoTen}</td>     
                        <td>${diaChi}</td>     
                        <td>${email}</td>     
                        <td>${loaiNguoiDung}</td>     
                        <td>${newEmployee.tienLuong()}</td>     
                        <td>
                            <button onclick="deleteUser(' ${ID}')" data-id='${ID}' class="btn btn-danger">Delete</button>
                            <button onclick="getUser('${ID}')" class="btn btn-warning">Edit</button>
                        </td>     
                    </tr>
                `
                break;
            }
            case "Customer": {
                let newCustomer = new Customer();
                Object.assign(newCustomer, item)
                const {ID, hoTen, diaChi, email, loaiNguoiDung} = newCustomer;
                content += `
                    <tr>
                        <td>${ID}</td>     
                        <td>${hoTen}</td>     
                        <td>${diaChi}</td>     
                        <td>${email}</td>     
                        <td>${loaiNguoiDung}</td>     
                        <td>${newCustomer.showInfoCus()}</td>     
                        <td>
                            <button onclick="deleteUser('${ID}')" data-id='${ID}' class="btn btn-danger">Delete</button>
                            <button onclick="getUser('${ID}')" class="btn btn-warning">Edit</button>
                        </td>     
                    </tr>
                `
                break;
            }
        }
    })
    document.getElementById("tbody").innerHTML = content;
}

function saveDataLocal() {
    let stringData = JSON.stringify(person.listPerson);
    localStorage.setItem("arrUser", stringData)
}

function getDataLocal() {
    let stringData = localStorage.getItem("arrUser");
    if (stringData) {
        person.listPerson = JSON.parse(stringData)
        person.listPerson.forEach((item, index) => {
            // console.log(item.loaiNguoiDung)
            let value = "";
            if (item.loaiNguoiDung == "Student") {
                value = "1"
            } else if (item.loaiNguoiDung == "Employee") {
                value = "2"
            } else {
                value = "3"
            }
            renderTemplate(value)
        })
    }
}
getDataLocal()

// Xoá người dùng

function deleteUser(idUser) {
    // Khác kiểu dữ liệu nên luôn ra -1
    // Mà khi nãy em có code xong đối chiếu lại với cái bài food á chị, nhưng lúc em test thì bên em nó luôn trả về index đầu tiên, nhưng giá trị của ID thì đúng ạ. 
    // Ban đầu em để dấu =, là gán ID cho thằng đầu tiên = idUser, chị sửa lại cho em là ==
    // À dạ, em cám ơn chị
    let index = person.listPerson.findIndex((item) => item.ID*1 == idUser )
    if (index != -1) {
        person.deletePerson(index);
        saveDataLocal()
        renderTemplate()
    }
}

// Lấy người dùng
function getUser(idUser) {
    // console.log(idUser)
    let user = person.listPerson.find((item, index) => {
        return item.ID == idUser;
    });
    // console.log(user)

    if (user) {
        let arrField = document.querySelectorAll("form input, form select , form textarea");
        arrField.forEach((item, index) => {
            let { id } = item;
            item.value = user[id]
        })
        $('#exampleModal').modal('show');
        document.getElementById("foodID").readOnly = true;
    }
}

// Hàm updata người dùng
let updateUser = () => {
    // lấy dữ liệu từ input select và textarea
    const arrField = document.querySelectorAll("form input, form select , form textarea")
    // console.log(arrField)
    let value = document.querySelector("form select").value;
    console.log(value)
    let listUser = person.listPerson
    console.log(listUser)
    switch(value) {
        case "1": {
            let userStudent = new Student();
            arrField.forEach((item, index) => {
                let { id, value } = item;
                console.log(id)
                console.log(value)
                userStudent[id] = value;
            })
            let index1 = person.listPerson.findIndex((item, index) => {
                return item.ID == userStudent.ID;
            });
            if (index1 != -1) {
                person.updateUser(userStudent, index1)
                renderTemplate()
                $('#myModal').modal('hide');
                saveDataLocal()
            }
            break;
        }

        case "2": {
            let userEmployee = new Employee();
            arrField.forEach((item, index) => {
                let { id, value } = item;
                console.log(id)
                console.log(value)
                userEmployee[id] = value;
            })
            let index2 = person.listPerson.findIndex((item, index) => {
                return item.ID == userEmployee.ID;
            });
            if (index2 != -1) {
                person.updateUser(userEmployee, index2)
                renderTemplate()
                $('#myModal').modal('hide');
                saveDataLocal()
            }
            break
        }

        case "3": {
            let userCustomer = new Customer();
            arrField.forEach((item, index) => {
                let { id, value } = item;
                console.log(id)
                console.log(value)
                userCustomer[id] = value;
            })
            let index3 = person.listPerson.findIndex((item, index) => {
                return item.ID == userCustomer.ID;
            });
            if (index3 != -1) {
                person.updateUser(userCustomer, index3)
                renderTemplate()
                $('#myModal').modal('hide');
                saveDataLocal()
            }
            break
        }
    }
};

let sortName = ()  => {
    person.listPerson.sort((name1, name2 ) => {
        const user1 = name1.hoTen.toLowerCase();
        const user2 = name2.hoTen.toLowerCase();

        if (user1 < user2) {
            return -1
        } else if (user1 > user2) {
            return 1
        } else {
            return 0;
        }
    })
    renderTemplate()
    saveDataLocal()
}

sortName()
  
  document.getElementById("btnUpdate").onclick = updateUser;

window.onload = () => {
    window.deleteUser = (ID) => {
        // console.log(valueSelect)
        // console.log(ID)
        deleteUser(ID)
    }

    window.getUser = (ID) => {
        // console.log(valueSelect)
        // console.log(ID)
        getUser(ID)
    }
}