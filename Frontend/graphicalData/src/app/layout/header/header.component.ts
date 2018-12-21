import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestingService } from 'src/app/core/testing.service';
import { DataSharedService } from 'src/app/core/dataShared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  inputSearch = new FormControl('');

  dataSearch: any[];

  constructor(private testingService: TestingService,
    private dataShared: DataSharedService) { }

  ngOnInit() { }

  onSearchByText(): void {
    console.log(`Usted esta buscando : ${this.inputSearch.value}`);
    this.testingService.getSicksByText(this.inputSearch.value).subscribe(data => {
      this.dataSearch = data;
      this.dataShared.setCurrentNumber(data);
    });
  }
}
