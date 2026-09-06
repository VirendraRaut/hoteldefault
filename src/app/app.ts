import { Component, signal } from '@angular/core';
import { Rooms } from './rooms/rooms';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Rooms, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hoteldefault');

  role = 'Admin';
}