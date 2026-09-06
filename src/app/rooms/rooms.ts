import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  imports: [NgForOf],
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

  roomsDetails: RoomsDetails[] = [
    {
      roomNumber: 'a1',
      roomType: 'Deluxe Room',
      image: 'assets/rooms/deluxe.jpg',
      price: 2500,
      amenities: 'WiFi, AC, TV, Breakfast',
      checkInTime: new Date('2026-09-04T12:00:00'),
      checkOutTime: new Date('2026-09-05T11:00:00'),
    },
    {
      roomNumber: 'a2',
      roomType: 'Standard Room',
      image: 'assets/rooms/standard.jpg',
      price: 1800,
      amenities: 'WiFi, AC, TV',
      checkInTime: new Date('2026-09-04T12:00:00'),
      checkOutTime: new Date('2026-09-05T11:00:00'),
    },
    {
      roomNumber: 'a3',
      roomType: 'Executive Room',
      image: 'assets/rooms/executive.jpg',
      price: 3500,
      amenities: 'WiFi, AC, TV, Mini Bar, Breakfast',
      checkInTime: new Date('2026-09-04T12:00:00'),
      checkOutTime: new Date('2026-09-05T11:00:00'),
    },
    {
      roomNumber: 'a4',
      roomType: 'Suite Room',
      image: 'assets/rooms/suite.jpg',
      price: 5000,
      amenities: 'WiFi, AC, TV, Mini Bar, Breakfast, Sofa',
      checkInTime: new Date('2026-09-04T12:00:00'),
      checkOutTime: new Date('2026-09-05T11:00:00'),
    },
    {
      roomNumber: 'a5',
      roomType: 'Family Room',
      image: 'assets/rooms/family.jpg',
      price: 4200,
      amenities: 'WiFi, AC, TV, Breakfast, Extra Bed',
      checkInTime: new Date('2026-09-04T12:00:00'),
      checkOutTime: new Date('2026-09-05T11:00:00'),
    },
  ];
}

export interface RoomsInfo {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomsDetails {
  roomNumber: string;
  roomType: string;
  image: string;
  price: number;
  amenities: string;
  checkInTime: Date;
  checkOutTime: Date;
}
