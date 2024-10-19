import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-number-pad',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.css']
})
export class NumberPadComponent implements OnInit {
  @Output() numberEntered = new EventEmitter<number>();

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  buttonColors: string[] = [];

  ngOnInit() {
    this.generateRandomColors();
  }

  onNumberClick(number: number) {
    this.numberEntered.emit(number);
  }

  generateRandomColors() {
    this.buttonColors = this.numbers.map(() => this.getRandomColor());
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}