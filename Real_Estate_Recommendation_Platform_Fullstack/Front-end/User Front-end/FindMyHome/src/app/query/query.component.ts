import { Component} from '@angular/core';
import { Query } from '../model/query';
import { userProfile } from '../model/userProfile';
import { QueryService } from '../services/query.service';
import { UserprofileService } from '../services/userprofile.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

  user: userProfile = new userProfile("","","","","");

  query: Query[] = [];
  q : Query = new Query();

constructor(private userprofileservice:UserprofileService,
            private queryService:QueryService) {

var r = this.userprofileservice.getUser();
    r.subscribe(d => {
      this.user = d;
      console.debug(this.user);
    });

    var queries = this.queryService.getQuery();
    queries.subscribe(d => {
      this.query = d;
      console.debug(this.query);
    });

  }

  onSubmitQuery() : void
  {
    this.queryService.addQuery(this.q).subscribe(d => this.query.push(d));
  }
}

