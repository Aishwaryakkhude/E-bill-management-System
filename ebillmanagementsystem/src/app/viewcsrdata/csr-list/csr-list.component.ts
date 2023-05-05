import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cunsumer } from 'src/app/comman/cunsumer';
import { User } from 'src/app/comman/user';

import { CsrserviceService } from 'src/app/service/csrservice.service';

@Component({
  selector: 'app-csr-list',
  templateUrl: './csr-list.component.html',
  styleUrls: ['./csr-list.component.css']
})
export class CsrListComponent implements OnInit{
  

  
  cunsumer: Cunsumer[];
constructor(public router:Router,private empService:CsrserviceService,private activateRoute:ActivatedRoute) { }
  
ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.getAllCunsumer());
    
  }
  
getAllCunsumer(): void {
    this.empService.getAllCunsumer().subscribe(data=>{
      console.log(data);
      this.cunsumer=data;
    });
  }
  addCsr():void 
  {
    this.router.navigateByUrl("/csrform");
  }
  updateCsr(id:number):void
  {
    this.router.navigateByUrl("/updateCsr/"+id);
  }
  deleteCsr(id:number):void
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.empService.deleteCunsumer(id).subscribe(data=>{
        console.log(data);
        this.getAllCunsumer();
      })
    };
  }
}
