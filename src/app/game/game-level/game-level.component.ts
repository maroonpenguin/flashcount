import { Component, OnInit } from '@angular/core';
import { GameService } from "../../shared/services/game.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-game-level',
  templateUrl: './game-level.component.html',
  styleUrls: ['./game-level.component.scss']
})
export class GameLevelComponent implements OnInit {
  public selectedDigit: string = "3";
  public selectedLine: string = "5";
  public selectedSpeed: string = "3";

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  // 桁の選択
  public onDigitChange(val: string) {
    this.selectedDigit = val;
  }
  // 行の選択
  public onAmountChange(val: string) {
    this.selectedLine = val;
  }
  // 速さの選択
  public onSpeedChange(val: string) {
    this.selectedSpeed = val;
  }

  // ランダム数字配列を作成
  startgame() {
    this.gameService.selectLevel(
      this.selectedDigit,
      this.selectedLine,
      this.selectedSpeed
    )
    this.router.navigate(["/play"])
  }


}
