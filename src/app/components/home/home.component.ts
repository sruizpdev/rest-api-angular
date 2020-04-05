import { Component } from "@angular/core";
import { ServiceService } from "../../services/service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  newData: any[] = [];

  constructor(private dataService: ServiceService) {
    dataService.getData().subscribe((data: any) => {
      this.newData = data;
    });
  }
}
