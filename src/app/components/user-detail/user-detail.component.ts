import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-user-detail',
//   templateUrl: './user-detail.component.html',
//   styleUrls: ['./user-detail.component.css']
// })

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})

export class UserDetailComponent implements OnInit {
  user: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.user = this.userService.getCachedUser(userId);
    if (!this.user) {
      this.userService.getUser(userId).subscribe(response => {
        this.user = response.data;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}


// import { Component } from '@angular/core';


// export class UserDetailComponent {

// }
