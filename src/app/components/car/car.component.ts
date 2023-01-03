import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarImage } from '../../models/carImage';
import { CarImageService } from '../../services/car-image.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[]
  carImages:CarImage[]=[]
  baseUrl="https://localhost:44306/Uploads/Images/"
  imageOfPath:string | undefined;

  constructor(private carService:CarService, private carImageService:CarImageService){}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{this.cars=response.data})
  }

  image(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      const imagePath=response.data[0].imagePath
      this.imageOfPath= this.baseUrl+imagePath;
      console.log(this.imageOfPath)
    })
    //sasaaa
    return this.imageOfPath

  }
}
