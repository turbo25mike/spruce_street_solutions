import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { StatusService } from '../../services/status.service';

@Component({
    selector: 'work',
    providers: [StatusService],
    template: require('./work.component.html')
})
export class WorkComponent {
    public forecasts: WeatherForecast[];
    public apiStatus: string;
    public apiEnvironment: string;
    public apiLoggedIn: string;

    constructor(private http: Http, private service: StatusService) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json();
        });

        //service.getStatus().subscribe(res => this.apiStatus = res);
        //service.getEnvironment().subscribe(res => this.apiEnvironment = res);
        //service.getLoggedIn().subscribe(res => this.apiLoggedIn = res);
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}