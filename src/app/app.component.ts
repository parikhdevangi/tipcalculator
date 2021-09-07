import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tip';

  
 

  tip_five_input=0.05;
  tip_ten_input=0.1
  tip_fifthen_input=0.15;
  tip_twentyfive_input=0.25;
  tip_fifty_input=0.5;

  inp_bill_value!:any; // bill value
  No_people!:any;  // number of people
  cust_tip!:any;      //custom tip value

  tip_amount!:any; 
  total_amount!:any; 
  finaltotalamt!:any;
  finaltipamt!:any;
  cust_tip_amt!: any;

  
  fifthen(){
    this.tip_amount = this.inp_bill_value * this.tip_fifthen_input / this.No_people;
    this.total_amount=this.inp_bill_value * (this.tip_fifthen_input + 1) / this.No_people;
    this.finaltipamt=parseFloat(this.tip_amount).toFixed(2);
    this.finaltotalamt=parseFloat(this.total_amount).toFixed(2);
    
  }

  five(){
    this.tip_amount = this.inp_bill_value * this.tip_five_input / this.No_people;
    this.total_amount=this.inp_bill_value * (this.tip_five_input + 1) / this.No_people;
    this.finaltipamt=parseFloat(this.tip_amount).toFixed(2);
    this.finaltotalamt=parseFloat(this.total_amount).toFixed(2);
  }
  ten(){
    this.tip_amount = this.inp_bill_value * this.tip_ten_input / this.No_people;
    this.total_amount=this.inp_bill_value * (this.tip_ten_input + 1) / this.No_people;
    this.finaltipamt=parseFloat(this.tip_amount).toFixed(2);
    this.finaltotalamt=parseFloat(this.total_amount).toFixed(2);
  }
  twentyFive(){
    this.tip_amount = this.inp_bill_value * this.tip_twentyfive_input / this.No_people;
    this.total_amount=this.inp_bill_value * (this.tip_twentyfive_input + 1) / this.No_people;
    this.finaltipamt=parseFloat(this.tip_amount).toFixed(2);
    this.finaltotalamt=parseFloat(this.total_amount).toFixed(2);
  }
  fifty(){
    this.tip_amount = this.inp_bill_value * this.tip_fifty_input / this.No_people;
    this.total_amount=this.inp_bill_value * (this.tip_fifty_input + 1) / this.No_people;
    this.finaltipamt=parseFloat(this.tip_amount).toFixed(2);
    this.finaltotalamt=parseFloat(this.total_amount).toFixed(2);
  }

  reset(){
    this.inp_bill_value='';
    this.No_people='';
    this.cust_tip='';
    this.finaltipamt='';
    this.finaltotalamt='';

  }
  ngOnInit(){}



}
