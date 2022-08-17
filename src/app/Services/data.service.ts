import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ls: any = localStorage.getItem("count");
  counter: number = JSON.parse(this.ls) || 0;
  productCart: any = new BehaviorSubject(0);
  data: any = {
    "sliders": [
      {
        "image": "../../../assets/images/slider1 en.png",
        "text": "Shop now while you are at home and order what you need with ease and ease"
      },
      {
        "image": "../../../assets/images/slider2 en.png",
        "text": "Everything you need and more than all electronic devices and more"
      }
    ],
    "about": [
      {
        "text": "X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price"
      },
      {
        "text": "X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price"
      },
      {
        "text": "X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price X-Store is a website for selling electronic products and devices such as phones, laptops and smart watches, as well as cameras with the latest products and departments, at special prices and excellent service. To assure you of product quality and price"
      },

    ],
    "products": [
      {
        "id": 1,
        "name": "Dell A25",
        "price": 15000,
        "image": "../../assets/images/1.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 2,
        "name": "Lenovo ideapad 510",
        "price": 12000,
        "image": "../../assets/images/2.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 3,
        "name": "Dell NC200",
        "price": 15000,
        "image": "../../assets/images/pro1.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 4,
        "name": "hp N3300",
        "price": 11000,
        "image": "../../assets/images/33.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 5,
        "name": "Tablet lenovo15",
        "price": 3000,
        "image": "../../assets/images/sa21.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 6,
        "name": "iphone 12",
        "price": 10000,
        "image": "../../assets/images/iph21.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 7,
        "name": "iphone 13",
        "price": 14000,
        "image": "../../assets/images/sa1.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
      {
        "id": 8,
        "name": "iphone 14",
        "price": 16000,
        "image": "../../assets/images/iph31.png",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus molestias dolore odio perferendis adipisci."
      },
    ]
  };
  constructor() {
  }
  addCount() {
    this.counter+= 1;
    this.productCart.next(this.counter);
    localStorage.setItem("count", this.productCart.getValue());
  }
  deleteCount() {
    this.counter-= 1;
    this.productCart.next(this.counter);
    localStorage.setItem("count", this.productCart.getValue());
  }
}

