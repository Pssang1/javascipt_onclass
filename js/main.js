var DSSV = [];
// Get data from local storage when reload
let dataLocalStorage = localStorage.getItem("DSSV_LOCAL");
console.log("dataLocalStorage :", dataLocalStorage);
// Check data local storage có tồn tại hay không
if (dataLocalStorage != null) {
  // Nếu có data từ local storage thì parse sang mảng
  // Vì dataLocalStorage là JSON
  var dataArray = JSON.parse(dataLocalStorage);
  // Vì data từ local storage không có method diemTB()
  // Duyệt mảng dataArray để convert thành mảng có method diemTB()
  DSSV = dataArray.map(function (item) {
    var sv = new SinhVien(
      item.maSV,
      item.tenSV,
      item.emailSV,
      item.passwordSV,
      item.diemToan,
      item.diemLy,
      item.diemHoa
    );
    return sv;
  });
  render(DSSV);
}
function addSinhVien() {
  var sv = layThongTinTuForm();
  if (validateID(sv.maSV, DSSV) == true) {
    DSSV.push(sv);
  }

  var DSSV_JSON = JSON.stringify(DSSV);
  console.log("DSSV_JSON :", DSSV_JSON);
  //save json into local storage
  localStorage.setItem("DSSV_LOCAL", DSSV_JSON);
  render(DSSV);
}
function deleteSinhVien(maSV) {
  //splice(viTri, soluong = 1)
  var viTri = findID(maSV, DSSV);

  if (viTri != -1) {
    DSSV.splice(viTri, 1);
    var DSSV_JSON = JSON.stringify(DSSV);
    console.log("DSSV_JSON :", DSSV_JSON);
    //save json into local storage
    localStorage.setItem("DSSV_LOCAL", DSSV_JSON);
    render(DSSV);
  }
}

document.getElementById("btn-update").disabled = true;
function changeInformationSinhVien(maSV) {
  //splice(viTri, soluong = 1)
  var viTri = findID(maSV, DSSV);

  if (viTri != -1) {
    document.getElementById("btn-update").disabled = false;
    document.getElementById("btn-add").disabled = true;
    var sv = DSSV[viTri];
    document.getElementById("txtMaSV").value = `${sv.maSV}`;
    document.getElementById("txtMaSV").disabled = true;
    document.getElementById("txtTenSV").value = `${sv.tenSV}`;
    document.getElementById("txtEmail").value = `${sv.emailSV}`;
    document.getElementById("txtPass").value = `${sv.passwordSV}`;
    document.getElementById("txtDiemToan").value = `${sv.diemToan}`;
    document.getElementById("txtDiemLy").value = `${sv.diemLy}`;
    document.getElementById("txtDiemHoa").value = `${sv.diemHoa}`;

    document.getElementById("spanTenSV").innerHTML = `Mời sửa tên`;
    document.getElementById("spanEmailSV").innerHTML = `Mời sửa email`;
    document.getElementById("spanMatKhau").innerHTML = `Mời sửa password`;
    document.getElementById("spanToan").innerHTML = `Mời sửa điểm Toán`;
    document.getElementById("spanLy").innerHTML = `Mời sửa điểm Lý`;
    document.getElementById("spanHoa").innerHTML = `Mời sửa điểm Hoá`;

    document.getElementById("spanUpdate").innerHTML = `Nhấn để cập nhật`;
  }
}
function updateSinhVien() {
  var sv = layThongTinTuForm();
  deleteSinhVien(sv.maSV);
  DSSV.push(sv);
  var DSSV_JSON = JSON.stringify(DSSV);
  console.log("DSSV_JSON :", DSSV_JSON);
  //save json into local storage
  localStorage.setItem("DSSV_LOCAL", DSSV_JSON);
  render(DSSV);
  document.getElementById("spanTenSV").innerHTML = ``;
  document.getElementById("spanEmailSV").innerHTML = ``;
  document.getElementById("spanMatKhau").innerHTML = ``;
  document.getElementById("spanToan").innerHTML = ``;
  document.getElementById("spanLy").innerHTML = ``;
  document.getElementById("spanHoa").innerHTML = ``;

  document.getElementById("spanUpdate").innerHTML = ``;
  document.getElementById("btn-update").disabled = true;
  document.getElementById("btn-add").disabled = false;
  document.getElementById("txtMaSV").disabled = false;
}
