import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Record } from '../../models/record';
import { ChartModule } from 'primeng/chart';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  records?: Record[];

  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getRecords().subscribe((data) => {
      this.records = data;
      this.initChart(this.records);
    });
  }

  initChart(data: Record[]) {
    this.data = {
      labels: [],
      datasets: [
        {
          label: 'Weight',
          data: data.map((record) => record.Weight),
          fill: false,
          tension: 0.4,
        },
      ],
    };
  }
}
