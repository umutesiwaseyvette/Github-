import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'
import { Repository } from '../repository';
import {ServiceService} from'../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ServiceService]
})
export class formComponent implements OnInit {
  user: User;
  submitSearch(name) {
    this.service .getProfileInfo(name.target.value);
    this. service.getRepoInfo(name.target.value);
  }

  username= new User("",'');
  public_repos=new Repository("",0,"");
  constructor(private http:HttpClient, private service:ServiceService) { 
    this.user = this.service.user;
    this.public_repos=new Repository("",0,"");
    }
  Check(){
    interface ApiResponse{
      name:string;
      public_repos:number;
      followers:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/"+this.username+"?access_token=b9fc7ad7493527d9ae03754c2d2728bc8f705c55")
    .subscribe((data:any)=>{
      
      // console.log(data);
      this.public_repos.name= data.name;
      this.public_repos.public_repos=data.public_repos;
      this.public_repos.followers=data.followers;
    });
  }
  // console.log(this.username)


  ngOnInit() {
    this.user = this.service.user;
  }

}