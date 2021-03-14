import { Component } from '@angular/core';

@Component({
  selector: 'diary-sam',
  templateUrl: 'sam.component.html',
  styleUrls: ['sam.component.scss']
})
export class SamComponent {
  player: any = [
    {
      tong: 0,
      diem: []
    },
    {
      tong: 0,
      diem: []
    },
    {
      tong: 0,
      diem: []
    },
    {
      tong: 0,
      diem: []
    },
    {
      tong: 0,
      diem: []
    }
  ];
  times: any = [];
  constructor() {
    this.times = [1]
  }
  vongChoiCu = 0;
  diemVongChoiCu = [];
  sumPoint(event: any, vong_choi, nguoi_choi) {
    this.vongChoiCu = vong_choi;
    this.vongChoiCu > vong_choi ? this.diemVongChoiCu = [] : this.diemVongChoiCu;
    let input = +event.target.value
    if (input || input === 0) {
      this.player[nguoi_choi].diem[vong_choi] = (input > 0 ? -input : '-');
      this.diemVongChoiCu = []
      this.player.forEach((ngChoi) => {
        if (ngChoi.diem[vong_choi]) {
          this.diemVongChoiCu.push(ngChoi.diem[vong_choi] === '-' ? 0 : ngChoi.diem[vong_choi])
        }
      });
    }
  }
  tongDiemNguoiChoi(vong_choi, nguoi_choi) {
    this.player.forEach((pl: any, index) => {
      // Tông điểm của 1 người chơi
      if (pl.diem.length > 0) {
        pl.tong = pl.diem.reduce(this.sum);
      }
    })
  }
  vanTiep() {
    console.log(this.times[0])
    if(this.vongChoiCu > 0) {
      this.times.unshift(this.times[0] + 1);
      this.player.forEach(pl => {
        if(pl.diem[this.vongChoiCu] === '-') {
          pl.tong = pl.tong - this.diemVongChoiCu.reduce(this.sum);
        } else if(pl.diem[this.vongChoiCu] === 0) {
          pl.tong = pl.tong - 20
        } else {
          pl.tong = pl.tong + pl.diem[this.vongChoiCu];
        }
      })
    }
  }
  chatHeo: boolean = false;
  checkKey(key) {
    // console.log(key)
    // dấu - là 189
  }
  sum(a, b) {
    return a + b;
  }
}
