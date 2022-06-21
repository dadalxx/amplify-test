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
  }

  async setData() {
    const toDo = new Todo({
      name: 'sunxiaoda',
      description: new Date().toTimeString(),
    })
    await DataStore.save(toDo);
  }

  async getData() {
    const data = await DataStore.query(Todo);
    console.log(data);
  }
}

