import { Component, OnInit } from '@angular/core';
import { NewsList } from "../../shared/data/newslist.json"

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newslist: any;
  constructor(
  ) { }

  ngOnInit(): void {
    this.newslist = NewsList
  }

}
