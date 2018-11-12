import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CaseStudy } from '../interfaces';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  caseStudies: CaseStudy[];
  caseStudy: CaseStudy;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getCaseStudies().subscribe(studies => {
      this.caseStudies = studies;
    });
  }

  setStudyView(study: CaseStudy) {
    this.caseStudy = study;
  }

  goWebsite(link: string) {
    window.open(link, '_blank');
  }

}
