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
  vongChoiCu = 0;
  diemVongChoiCu = [];
  inputName(name: string, index: number) {
    this.player[index].name = name;
  }
  sumPoint(event: any, vong_choi, nguoi_choi) {
  }
  checkEvent(event: any, vong_choi: number, nguoi_choi: number) {
    console.log(event.target.value);
    this.player[nguoi_choi].diem[vong_choi] = +event.target.value;
  }
  vanTiep() {
    console.log(this.player)
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
