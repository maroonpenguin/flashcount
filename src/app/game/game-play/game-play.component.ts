import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {
  public isNum:number[] = [];
  public isSpeed:number = 3;
  public countWait:boolean = true;
  private timeUp:number = 5000;
  constructor(
    private gameService: GameService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.isNum = this.gameService.reCount()
    this.isSpeed = this.gameService.reSpeed()
    this.countWait = true
    this.speedTime()

    // カウントダウン
    setTimeout(() => {
      this.countWait = false
      // カウントダウン2
      setTimeout(() => {
        this.router.navigate(["/result"])
      }, this.timeUp);
    }, 3000);
  }
  
  // 速さから時間へ変換
  speedTime() {
    if (this.isSpeed == 1) {
      this.timeUp = this.isNum.length * 3000
    }
    if (this.isSpeed == 2) {
      this.timeUp = this.isNum.length * 2000
    }
    if (this.isSpeed == 3) {
      this.timeUp = this.isNum.length * 1000
    }
    if (this.isSpeed == 4) {
      this.timeUp = this.isNum.length * 500
    }
    if (this.isSpeed == 5) {
      this.timeUp = this.isNum.length * 250
    }
  }
}

