import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

interface GitHubFollowers {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

@Component({
  selector: 'app-followers-list',
  standalone: false,
  templateUrl: './followers-list.component.html',
  styleUrl: './followers-list.component.scss',
})
export class FollowersListComponent {
  followers$: Observable<GitHubFollowers[]>;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.followers$ = this.route.params.pipe(
      switchMap((params) =>
        this.http.get<GitHubFollowers[]>(
          `https://api.github.com/users/${params['username']}/followers`
        )
      )
    );
  }
}
