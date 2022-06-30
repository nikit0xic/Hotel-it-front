import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {Overworks} from "../../model/overworks";
import {OverworkGeneral} from "../../model/OverworkGeneral";

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css']
})
export class WorkingTimeComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'deviation',
    'coming',
    'leaving',
    'workout',
    'overwork'
  ];

  displayedColumnsForFooterTable: string[] = [
    'hour_graph',
    'workout_today',
    'left_time',
    'norm_evening',
    'days_moth_left',
    'overwork_now'
  ];

  constructor() { }

  public overworkData = [ new Overworks(
    new Date(),
    'Работа на дому',
    '9:56',
    '18:57',
    "5:00",
    '0:34'),
    new Overworks(
      new Date(),
      'Работа в офисе',
      '9:56',
      '18:34',
      "5:00",
      '1:32'
    ),
    new Overworks(
      new Date(),
      'Работа на дому',
      '8:51',
      '18:34',
      "5:00",
      '-0:20'
    ),
    new Overworks(
      new Date(),
      'Работа в офисе',
      '8:59',
      '18:34',
      "5:00",
      '3:12'
    ),
    new Overworks(
      new Date(),
      'Работа на дому',
      '8:57',
      '18:34',
      "5:00",
      '0:34'
    ),
    new Overworks(
      new Date(),
      'Работа на дому',
      '9:00',
      '18:34',
      "5:00",
      '0:34'
    ),
    new Overworks(
      new Date(),
      'Работа в офисе',
      '8:52',
      '18:34',
      "5:00",
      '0:34'
    ),
    new Overworks(
      new Date(),
      'Работа на дому',
      '8:58',
      '18:34',
      "5:00",
      '0:34'
    ),
    new Overworks(
      new Date(),
      'Работа в офисе',
      '9:09',
      '18:34',
      "5:00",
      '0:34'
    ),
  ]

  public overworkGeneralData = [
    new OverworkGeneral(
      160,
      '102:23',
      '57:67',
      '2:30',
      7,
      '-0:34'
    )


  ]

  ngOnInit(): void {
  }


}
