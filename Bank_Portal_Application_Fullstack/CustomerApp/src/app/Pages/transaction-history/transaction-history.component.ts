import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { FundTransferService } from 'src/app/services/fund-transfer.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {

  transactions : any = [];

  constructor(private fundTransfer: FundTransferService) {
    var r = this.fundTransfer.getTransaction();
    r.subscribe(d => {console.debug(d);
                this.transactions = d;
                console.debug(this.transactions);});
  }

}
