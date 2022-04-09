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
  @Input() downvote!: string;

  @Input() getNewQuote!: () => void;

  constructor() {}
}