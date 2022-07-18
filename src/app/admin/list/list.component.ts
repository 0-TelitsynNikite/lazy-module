import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  userName = 'Max'

  constructor(public translateLang: TranslateService) {
  }

  onChangeName(value: any) {
    this.userName = value.target.value
  }
}
