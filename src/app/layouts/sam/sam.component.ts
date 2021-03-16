import { Component } from '@angular/core';

@Component({
  selector: 'diary-sam',
  templateUrl: 'sam.component.html',
  styleUrls: ['sam.component.scss']
})
export class SamComponent {
  player: any = [
    {
      name: 'người chơi 1',
      tong: 0,
      diem: []
    },
    {
      name: 'người chơi 2',
      tong: 0,
      diem: []
    },
    {
      name: 'người chơi 3',
      tong: 0,
      diem: []
    },
    {
      name: 'người chơi 4',
      tong: 0,
      diem: []
    },
    {
      name: 'người chơi 5',
      tong: 0,
      diem: []
    }
  ];
  times: any = [1];
  keyCode: number = 0;
  constructor() {
    let sam = {
      player: this.player,
      times: this.times,
      vongChoiCu: this.vongChoiCu
    }
    let samLocal = localStorage.getItem('sam');
    if(samLocal) {
      this.player = JSON.parse(samLocal).player;
      this.times = JSON.parse(samLocal).times;
      this.vongChoiCu = JSON.parse(samLocal).vongChoiCu;
    } else {
      localStorage.setItem('sam',JSON.stringify(sam));
    }
  }
  inputCode(code) {
    if(code === 13) {
      this.vanTiep();
    }
    this.keyCode = code
  }
  vongChoiCu = 0;
  diemVongChoiCu = [];
  inputName(name: string, index: number) {
    this.player[index].name = name;
  }
  sumPoint(event: any, vong_choi, nguoi_choi) {
    this.vongChoiCu = vong_choi;
    this.vongChoiCu > vong_choi ? this.diemVongChoiCu = [] : this.diemVongChoiCu;
    let input = +event.target.value
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
  checkEvent(event: any, vong_choi: number, nguoi_choi: number) {
    this.vongChoiCu = vong_choi;
    let input = event.target.value
    if(input === 0) {
      this.player[nguoi_choi].diem[vong_choi] = 0;
    } else if (input === '-') {
      this.player[nguoi_choi].diem[vong_choi] = '-';      
    } else {
      this.player[nguoi_choi].diem[vong_choi] = +input;
    }
    this.diemVongChoiCu = []
    this.player.forEach((ngChoi) => {
      if (ngChoi.diem[vong_choi]) {
        this.diemVongChoiCu.push(ngChoi.diem[vong_choi] === '-' ? 0 : ngChoi.diem[vong_choi])
      }
    });
  }
  vanTiep() {
    let validate = false;
    this.player.forEach(pl => {
      if (!pl.diem[this.vongChoiCu] && pl.diem[this.vongChoiCu] !== 0) {
        validate = true;
        return;
      }
      })
    if(validate) {
      alert('Nhập điểm vòng đi rồi nhấn chơi tiếp!')
      return;
    }
    this.times.unshift(this.times[0] + 1);
    this.player.forEach(pl => {
      if(pl.diem[this.vongChoiCu] === '-') {
        pl.tong = pl.tong - this.diemVongChoiCu.reduce(this.sum);
      } else {
        if(pl.diem[this.vongChoiCu] !== '-' && pl.diem[this.vongChoiCu] !== 'e') {
          pl.tong = pl.tong + pl.diem[this.vongChoiCu];
        }
      }
    })
    let sam = {
      player: this.player,
      times: this.times,
      vongChoiCu: this.vongChoiCu
    }
    localStorage.setItem('sam', JSON.stringify(sam));
    this.vongChoiCu = 0;
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
