import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'selectEvents';
  nameData:any
  dataEl:any
  eventIndex:any
  ageData:any
  ageEl:any
  ageNgIf:boolean = false
  nameNgIf:boolean = false
  ngOnInit(){
  }
  data : any=[
    {name : 'srekanth' , age : 100},
    {name : 'abcdefg' , age : 200},
  ]
  onDataChange(e:any){
    debugger
  this.eventIndex = e.target.value
  if(this.eventIndex == 'Name'){
    this.nameNgIf = true
    this.ageNgIf = false
  }
  if(this.eventIndex == 'Age'){
    this.ageNgIf = true
    this.nameNgIf = false

  }
  }
}
