function layThongTinTuForm() {
  var _maSV = document.getElementById("txtMaSV").value;
  var _tenSV = document.getElementById("txtTenSV").value;
  var _emailSV = document.getElementById("txtEmail").value;
  var _passwordSV = document.getElementById("txtPass").value;
  var _diemToan = document.getElementById("txtDiemToan").value * 1;
  var _diemLy = document.getElementById("txtDiemLy").value * 1;
  var _diemHoa = document.getElementById("txtDiemHoa").value * 1;

  return new SinhVien(
    _maSV,
    _tenSV,
    _emailSV,
    _passwordSV,
    _diemToan,
    _diemLy,
    _diemHoa
  );
}
function render(array) {
  var contentHTML = "";
  for (let i = 0; i < array.length; i++) {
    var sv = array[i];
    var contentTr = `<tr>
                          <td>${sv.maSV}</td>
                          <td>${sv.tenSV}</td>
                          <td>${sv.emailSV}</td>
                          <td>${sv.diemTB()}</td>
                          <td onclick="deleteSinhVien('${
                            sv.maSV
                          }')" class="btn btn-danger">Xoá</td>
                          <td onclick="changeInformationSinhVien('${
                            sv.maSV
                          }')" class="btn btn-warning">Sửa</td>
                      </tr>`;
    contentHTML += contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = `${contentHTML}`;
}
function findID(id, array) {
  var viTri = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i].maSV == id) {
      viTri = i;
    }
  }
  return viTri;
}

function validateID(id, array) {
  var viTri = array.findIndex(function (item) {
    return item.maSV == id;
  });
  console.log(viTri);
  if (viTri != -1) {
    alert("Trùng mã sinh viên");
    return false;
  } else {
    return true;
  }
}
