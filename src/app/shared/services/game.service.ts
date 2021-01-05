import { Injectable } from '@angular/core';
import { Level } from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private digit: number = 3;
  private line: number = 5;
  private isLine: number[] = [];
  private speed: number = 3;
  private addAll:number = 0;
  constructor() { }

  selectLevel(digit: Level["digit"], line: Level["line"], speed: Level["speed"]) {
    // 桁、行、速さを数字へ変換
    this.digit = +digit;
    this.line = +line;
    this.speed = +speed;    
    this.isLine = [];
    // ランダム数字配列を作成
    this.CreateLine(this.line, this.digit)
  }

  // ランダム数字 = Math.floor(Math.random()*(最大値-最小値)+最小値);

  // 桁、行を指定
  CreateLine(l: number, n: number) {
    for (let i = 0; i < l; i++) {
      this.isLine.push(Math.floor(Math.random() * (Math.pow(10, n) - 1 - Math.pow(10, n - 1)) + Math.pow(10, n - 1)))
    }
  }

  // ランダム数字配列を返す
  reCount() {
    return this.isLine;
  }
  // 速さを返す
  reSpeed() {
    return this.speed;
  }

  // 合計を返す
  readAll() {
    this.addAll = this.isLine.reduce(function(a, x){return a + x})
    return this.addAll;
  }
  

}


