import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { trigger,state,style,animate,transition,} from '@angular/animations';
import * as moment from 'moment'
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';



@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css'],
  animations: [],
  providers: [DatePipe]
})


export class PrimaryComponent implements OnInit {  
  timer;
  time = moment().format('DD MMMM YYYY, h:mm:ss a')
  

  constructor() { 
    }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = moment().format('DD MMMM YYYY, h:mm:ss a')
    }, 1000)   
    
  }

}

