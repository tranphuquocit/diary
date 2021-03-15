import { Component } from '@angular/core';

@Component({
  selector: 'diary-sam',
  templateUrl: 'sam.component.html',
  styleUrls: ['sam.component.scss']
})
export class SamComponent {
  player: any = [
    {
      name: '',
      tong: 0,
      winner: null,
      diem: []
    },
    {
      name: '',
      tong: 0,
      winner: null,
      diem: []
    },
    {
      name: '',
      tong: 0,
      winner: null,
      diem: []
    },
    {
      name: '',
      tong: 0,
      winner: null,
      diem: []
    },
    {
      name: '',
      tong: 0,
      winner: null,
      diem: []
    }
  ];
  times: any = [1];
  vongChoiCu = 0;
  diemVongChoiCu = [];
  constructor() {
    let sam = localStorage.getItem('sam');
    if(sam) {
      this.player = JSON.parse(sam).player;
      this.times = JSON.parse(sam).times;
      this.vongChoiCu = JSON.parse(sam).vongChoiCu;
    }
  }
  inputName(name: string, id) {
    this.player[id].name = name;
  }
  keyCode: number = 0;
  inputCode(code) {
    this.keyCode = code
  }
  sumPoint(event: any, vong_choi, nguoi_choi) {
    // console.log(this.keyCode)
    this.vongChoiCu = vong_choi;
    this.vongChoiCu > vong_choi ? this.diemVongChoiCu = [] : this.diemVongChoiCu;
    let input = +event.target.value
    // console.log(input)
    if (input || input === 0) {
      if(this.keyCode === 189) {
        this.player[nguoi_choi].diem[vong_choi] = '-';
      } else if(this.keyCode === 69) {
        this.player[nguoi_choi].diem[vong_choi] = 'e';        
      } else if(this.keyCode === 48 && input === 0) {
        this.player[nguoi_choi].diem[vong_choi] = 0;        
      } else {
        this.player[nguoi_choi].diem[vong_choi] = (input > 0 ? -input : '-');
      }
      this.diemVongChoiCu = []
      this.player.forEach((ngChoi) => {
        if (ngChoi.diem[vong_choi]) {
          this.diemVongChoiCu.push(ngChoi.diem[vong_choi] === '-' ? 0 : ngChoi.diem[vong_choi])
        }
      });
    }
  }
  vanTiep() {
    if(this.vongChoiCu > 0) {
      this.times.push(this.times[this.times.length - 1] + 1);
      this.player.forEach(pl => {
        if(pl.diem[this.vongChoiCu] === '-') { 
          pl.tong = pl.tong - this.diemVongChoiCu.reduce(this.sum);
        } else {
          if(pl.diem[this.vongChoiCu] !== '-' && pl.diem[this.vongChoiCu] !== 'e') {
            pl.tong = pl.tong + pl.diem[this.vongChoiCu];
          }
        }
      })
    }
    let sam = {
      player: this.player,
      times: this.times,
      vongChoiCu: this.vongChoiCu
    }
    localStorage.setItem('sam', JSON.stringify(sam));
  }
  showThanhToan() {
    alert(`
    ${this.player[0].name} ${this.player[0].tong < 0 ? 'Số tiền thanh toán là ': 'Chúc mừng bạn nhận được '} ${this.player[0].tong}
    ${this.player[1].name} ${this.player[1].tong < 0 ? 'Số tiền thanh toán là ': 'Chúc mừng bạn nhận được '} ${this.player[1].tong}
    ${this.player[2].name} ${this.player[2].tong < 0 ? 'Số tiền thanh toán là ': 'Chúc mừng bạn nhận được '} ${this.player[2].tong}
    ${this.player[3].name} ${this.player[3].tong < 0 ? 'Số tiền thanh toán là ': 'Chúc mừng bạn nhận được '} ${this.player[3].tong}
    ${this.player[4].name} ${this.player[4].tong < 0 ? 'Số tiền thanh toán là ': 'Chúc mừng bạn nhận được '} ${this.player[4].tong}
    `);
    localStorage.removeItem('sam');
    window.location.reload();
  }
  sum(a, b) {
    return a + b;
  }
}
