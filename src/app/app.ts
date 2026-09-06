import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { NgSwitch, NgSwitchDefault } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rooms, NgSwitch, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('hoteldefault');

  role = 'Admin';
}
