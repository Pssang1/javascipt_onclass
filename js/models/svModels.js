function SinhVien(
  _maSV,
  _tenSV,
  _emailSV,
  _passwordSV,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.emailSV = _emailSV;
  this.passwordSV = _passwordSV;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.diemTB = function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  };
}
