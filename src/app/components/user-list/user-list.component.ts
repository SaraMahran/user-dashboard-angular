import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading = true;
  totalUsers = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers(1);
  }

  fetchUsers(page: number) {
    this.loading = true;
    this.userService.getUsers(page).subscribe(response => {
      this.users = response.data;
      this.totalUsers = response.total;
      this.loading = false;
    });
  }

  onPageChange(event: PageEvent) {
    this.fetchUsers(event.pageIndex + 1);
  }

  viewUser(id: number) {
    this.userService.cacheUserDetails(this.users);
    this.router.navigate(['/user', id]);
  }
}



export class UserListComponent {

}
