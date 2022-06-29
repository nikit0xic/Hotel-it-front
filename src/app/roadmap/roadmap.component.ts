import { Component, OnInit } from '@angular/core';
import timeGridPlugin from "@fullcalendar/timegrid";

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
  calendarOptions = {
    locale:'ru',
    height: 350,
    initialView: 'resourceTimeline',
    scrollTime: '08:00',
    aspectRatio: 1.5,
    views: {
      resourceTimeline: {
        type: 'resourceTimeline',
        duration: { days: 30 },
        buttonText: '10 days'
      }
    },
    events: [
      {
        id: '1',
        resourceId: '1',
        title: 'Иванов',
        start: '2022-06-28',
        end: '2022-07-06'
      },
      {
        id: '2',
        resourceId: '2',
        title: 'Петров',
        start: '2022-07-03',
        end: '2022-07-11'
      },
      {
        id: '3',
        resourceId: '3',
        title: 'Терехов',
        start: '2022-07-10',
        end: '2022-07-15'
      }
    ],
    resources: [
      {
        id:'1',
        title: 'Номер 1'
      },
      {
        id:'2',
        title: 'Номер 2'
      },
      {
        id:'3',
        title: 'Номер 3'
      },
      {
        id:'4',
        title: 'Номер 4'
      }
      ,
      {
        id:'5',
        title: 'Номер 5'
      }
    ],
    draggable: true,
    editable: true,
    resourceAreaHeaderContent: 'Комнаты',
   };

  constructor() { }

  ngOnInit(): void {
  }

}
