import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  rows = [];

  // Shared chart options
  globalChartOptions: any = {
    responsive: true,
    legend: {
      display: false,
      position: 'bottom'
    }
  };

  // Bar
  barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [{
    data: [60000, 50000, 80000, 80000, 50000, 50000, 40000],
    label: 'Sales',
    borderWidth: 0
  }];
  barChartOptions: any = Object.assign({
    scaleShowVerticalLines: false,
    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
          defaultFontColor: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0,0,0,0.02)',
           defaultFontColor: 'rgba(0,0,0,0.02)',
          zeroLineColor: 'rgba(0,0,0,0.02)'
        },
        stacked: true
      }]
    }
  }, this.globalChartOptions);

  chartColors: Array <any> = [{ // grey
    backgroundColor: '#7986cb',
    borderColor: '#3f51b5',
    pointBackgroundColor: '#3f51b5',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }, { // dark grey
    backgroundColor: '#eeeeee',
    borderColor: '#e0e0e0',
    pointBackgroundColor: '#e0e0e0',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }, { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];
  // Pie
  pieChartLabels: string[] = ['Cost of Goods Sold', 'Sales Profit', 'Sales Completed'];
  pieChartData: number[] = [5000, 1600, 6600];
  pieChartType = 'pie';
  pieChartOptions: any = Object.assign({
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  }, this.globalChartOptions);
  pieChartColors: any[] = [{
    backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
  }];

  constructor() {
    
  }

  products = [
    {
        "product": "Produt 1",
        "date": 1427207139000,
        "progress": 5
    },
    {
        "product": "Produt 2",
        "date": 1427412725000,
        "progress": 46
    },
    {
        "product": "Produt 3",
        "date": 1427546580000,
        "progress": 23
    },
    {
        "product": "Produt 5",
        "date": 1427891640000,
        "progress": 67
    },
    {
        "product": "Produt 6",
        "date": 1428830580000,
        "progress": 12
    }
]
}
