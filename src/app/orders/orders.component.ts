import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: any = [
    {
      customerName: "Revanth Bogala",
      itemsNo: 3,
      totalAmount: 811.69,
      status: "Order Received",
      customerAddress1: "#3,92",
      customerAddress2: "Banglore",
      customerAddress3: "India",
      items: [
        {
          itemName: "Chicken Pizza",
          itemPrice: 367.69
        },
        {
          itemName: "Veg Pizza",
          itemPrice: 267
        },
        {
          itemName: "Corn Pizza",
          itemPrice: 177
        }
      ]
    },
    {
      customerName: "Customer 2",
      itemsNo: 5,
      totalAmount: 12833.23,
      status: "Order Received",
      customerAddress1: "#6-2, Silk Board",
      customerAddress2: "Banglore",
      customerAddress3: "India",
      items: [
        {
          itemName: "Chicken Barbeque Pizza",
          itemPrice: 367
        },
        {
          itemName: "Veg Pizza",
          itemPrice: 267
        },
        {
          itemName: "Corn Cheese Pizza",
          itemPrice: 177
        },
        {
          itemName: "Chicken Cheese Pizza",
          itemPrice: 295
        },
        {
          itemName: "Veg Pan Pizza",
          itemPrice: 177.23
        }
      ]
    },
    {
      customerName: "Customer 3",
      itemsNo: 1,
      totalAmount: 367,
      status: "Order Received",
      customerAddress1: "#132, Marathalli",
      customerAddress2: "Banglore",
      customerAddress3: "India",
      items: [
        {
          itemName: "Chicken Barbeque Pizza",
          itemPrice: 367
        }
      ]
    },
    {
      customerName: "Customer 4",
      itemsNo: 4,
      totalAmount: 987.72,
      status: "Order Received",
      customerAddress1: "#13/56, Tin factory",
      customerAddress2: "Banglore",
      customerAddress3: "India",
      items: [
        {
          itemName: "Chicken Barbeque Pizza",
          itemPrice: 367
        },
        {
          itemName: "Corn Cheese Pizza",
          itemPrice: 177
        },
        {
          itemName: "Chicken Pan Pizza",
          itemPrice: 280.72
        },
        {
          itemName: "Veg Cheese Pizza",
          itemPrice: 163
        }
      ]
    }
  ]

  selectedOrder : any = {}
  selectedIndex: number;
  statusSequence: any = ["Order Received","Preparing","Ready to serve"];

  constructor() { }

  ngOnInit() {
  }

  onClickOrder(order,index){
    this.selectedOrder = order;
    this.selectedIndex = index;
  }

  changeStatus(){
    let statusIndex = this.statusSequence.indexOf(this.orders[this.selectedIndex].status)
    if(statusIndex+1 < this.statusSequence.length)
    this.orders[this.selectedIndex].status = this.statusSequence[statusIndex+1]
  }

}
