import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input("name") serverName: string = ""
  @Input("color") serverColor: string = ""

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ServerDialog, {
      data: {
        name: this.serverName,
        color: this.serverColor
      }, width: "50%"
    });
  }

}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'server-dialog',
  templateUrl: 'server-dialog.html',
  styleUrls: ['./server.component.scss']
})
export class ServerDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    id: number,
    color: string,
    name: string
  }) { }

  chartType: ChartType = ChartType.Bar
  chartData = [
    ['Monday', 8136000],
    ['Tuesday', 8538000],
    ['Wednesday', 2244000],
    ['Thursday', 3470000],
    ['Friday', 19500000],
  ];
  chartOptions = {
    colors: [this.data.color],
    is3D: true
  };
}
