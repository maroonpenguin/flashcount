import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameLevelComponent } from './game/game-level/game-level.component';
import { GamePlayComponent } from './game/game-play/game-play.component';
import { GameResultComponent } from './game/game-result/game-result.component';
import { HowtoplayComponent } from './menu/howtoplay/howtoplay.component';
import { NewsComponent } from './menu/news/news.component';

const routes: Routes = [
  { path: "", component: GameLevelComponent},
  { path: "play", component: GamePlayComponent},
  { path: "result", component: GameResultComponent},
  { path: "news", component: NewsComponent},
  { path: "howtoplay", component: HowtoplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
