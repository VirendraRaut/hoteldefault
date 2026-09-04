import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms {
  hotelName = 'Marvels';
  msg = 'Welcome...';
  noOfRooms = 'Number of Total Rooms: 20';
  hideRooms = false;

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }

  rooms: RoomsInfo = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };
}

export interface RoomsInfo {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}
