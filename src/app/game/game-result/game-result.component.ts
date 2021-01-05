import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent implements OnInit {
  public isAll: number = 0;
  public showAll!: string;
  public key!: number;
  public message!: string;
  public resultWait: string = "none"
  public showResult!: string
  constructor(
    private router: Router,
    private location: Location,
    private gameservice: GameService
    ) { }
    
  ngOnInit(): void {
    this.isAll = this.gameservice.readAll()
    if (this.isAll == 0) {
      this.router.navigate(["/"])
    }
    this.resultWait = "none"
  }

  resultButton() {
    // バリデーション
    if ( this.key == null ) {
      this.message = "入力してください"
      return
    }
    // 結果へ
    if (this.key == this.isAll) {
      // 正解のとき
      this.resultWait = "true"
      this.showResult = "正解です"
    } else {
      // 不正解のとき
      this.resultWait = "false"
      this.showResult = "不正解です"
    }
  }

  // 同じ問題を解き直す
  gameagain() {
    this.location.back()
  }
  // 次の問題へ
  nextgame() {
    this.router.navigate(["/"])
  }
  // 正解を表示する
  addAll() {
    this.showAll = this.isAll.toLocaleString()
  }
}
