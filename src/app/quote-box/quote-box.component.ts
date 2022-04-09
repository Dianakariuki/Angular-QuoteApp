import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quote-box",
  templateUrl: "./quote-box.component.html",
  styleUrls: ["./quote-box.component.css"],
})
export class QuoteBoxComponent {
  @Input() author!: string;
  @Input() quote!: string;
  @Input() upvote!: string;
  @Input()
  numberofupvotes!: number;
  @Input() downvote!: string;
  @Input()
  numberofdownvotes: number=0;
  @Input() Delete!: string;
  @Input() getNewQuote!: () => void;
  isComplete: any;

  upvotes(){
   this.numberofupvotes++;
  }
  downvotes(){
    this.numberofdownvotes++;
   }
   goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() {}
}