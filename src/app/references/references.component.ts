import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  references = [
    {
      title: 'Отпуск по уходу за ребенком',
      content: 'Просим вас распечатать сформированное здесь заявление, оставить подпись и принести документ в офис'
    },
    {
      title: 'Предоставление отпуска по медицинским показаниям',
      content: 'Просим вас распечатать сформированное здесь заявление, оставить подпись и принести документ в офис'
    }, {
      title: 'Предоставление отпуска по семейным обстоятельствам',
      content: 'Просим вас распечатать сформированное здесь заявление, оставить подпись и принести документ в офис'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
