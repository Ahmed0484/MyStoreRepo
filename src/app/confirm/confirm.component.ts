import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  name:string;
  total:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.paramMap.get('name');
    this.total=Number(this.route.snapshot.paramMap.get('total'));
  }

}
