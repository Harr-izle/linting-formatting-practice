import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../../interfaces/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  title = 'Weekly Weather Forecast';
  forecasts: WeatherForecast[] = [];

  ngOnInit(): void {
    this.fetchWeatherForecast();
  }

  private fetchWeatherForecast(): void {
    // Simulating an API call
    this.forecasts = [
      { date: new Date(2024, 8, 14), temperature: 22, description: 'Sunny' },
      {
        date: new Date(2024, 8, 15),
        temperature: 20,
        description: 'Partly cloudy',
      },
      {
        date: new Date(2024, 8, 16),
        temperature: 18,
        description: 'Light rain',
      },
      { date: new Date(2024, 8, 17), temperature: 19, description: 'Overcast' },
      {
        date: new Date(2024, 8, 18),
        temperature: 23,
        description: 'Clear sky',
      },
    ];
  }
}
