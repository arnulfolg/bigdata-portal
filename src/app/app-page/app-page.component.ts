import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss']
})
export class AppPageComponent implements OnInit {
  @Input() chartType: ChartType = ChartType.PieChart
  @Input() myTitle = "Title chart"
  @Input() chartData = [
    ['Monday', 8136000],
    ['Tuesday', 8538000],
    ['Wednesday', 2244000],
    ['Thursday', 3470000],
    ['Friday', 19500000],
  ];
  appName: string = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appName = this.route.snapshot.params.id
  }

}
