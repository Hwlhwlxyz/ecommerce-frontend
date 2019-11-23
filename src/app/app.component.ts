import { TransactionService } from './service/transaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransactionService]
})
export class AppComponent {
  title = 'ecommerce-frontend';
}
