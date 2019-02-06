import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'
import { Repository } from '../repository';
// import {ServiceService} from'../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  // providers:[ServiceService]
})
export class formComponent implements OnInit {
  username:string;
  // submitSearch(name) {
  //   this.service .getProfileInfo(name.target.value);
  //   this. service.getRepoInfo(name.target.value);
  // }

  // username= new User("",'');
  public_repos:any;
  constructor(private http:HttpClient) { 
    // this.user = this.service.user;
    this.public_repos=new Repository("",0,"",);
    }
  Check(value){
    interface ApiResponse{
      name:string;
      public_repos:number;
      followers:string;
      // html_url:string
    }
    this.http.get<ApiResponse>("https://api.github.com/users/"+value+"?access_token=c91ff449dabd3d4a10d593bf570b4fb3ceb0f478")
    .subscribe((data:any)=>{
      
      // console.log(data);
      this.public_repos.name= data.name;
      this.public_repos.public_repos=data.public_repos;
      this.public_repos.followers=data.followers;
      // this.public_repos.html_url=data.html_url;
    });
    console.log(value.length)
  }


  ngOnInit() {
    // this.user = this.service.user;
  }

}