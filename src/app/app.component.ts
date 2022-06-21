import {
  Component,
  OnInit
} from '@angular/core';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'amplify-app';

  async ngOnInit() {
    const data = await DataStore.query(Todo);
    // await DataStore.save(
    //   new Todo({
    //     "name": "sunxiaoda",
    //     "description": "This is a Amplify Test"
    //   })
    // );
    console.log(DataStore);
    console.log(data);

    setInterval(async () => {
      const data = await DataStore.query(Todo);
      console.log(data);
    }, 5000)
  }
}

