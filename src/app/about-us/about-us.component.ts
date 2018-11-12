import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  teamMembers: TeamMember[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getTeamMembers().subscribe(team => {
      this.teamMembers = team;
    });
  }

  goWebsite(link: string) {
    window.open(link, '_blank');
  }

}
