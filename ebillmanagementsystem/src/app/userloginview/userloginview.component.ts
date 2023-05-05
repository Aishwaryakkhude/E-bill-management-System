import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cunsumer } from '../comman/cunsumer';
import { CsrserviceService } from '../service/csrservice.service';

@Component({
  selector: 'app-userloginview',
  templateUrl: './userloginview.component.html',
  styleUrls: ['./userloginview.component.css']
})
export class UserloginviewComponent {
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
