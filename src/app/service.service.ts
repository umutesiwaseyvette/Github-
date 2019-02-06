// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {environment} from './../environments/environment';
import {Repository} from './repository';


@Injectable({
  providedIn: 'root' //we declare that this service should be created by the root application injector.
})

export class ServiceService {
  repo: Repository; 
    user: User;

  private username: string;
  items;
  constructor(private http:HttpClient) { 
    console.log ("service is now ready!");
    this.username = 'umutesiwaseyvette';
    this.user = new User (' ','');
    this.repo = new Repository (' ', 0, ' ');
  }
  getProfileInfo(username){
    interface ApiResponse {
      // name: string;
      username: string;
      // avatar_url: string;
      // email: string;
      // location: string;
      // public_repos: number;
      html_url: string;
    // return this.http.get("https://api.github.com/users/" + this.username)

  }
  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>('https://api.github.com/users/' + username + "?access_token=b9fc7ad7493527d9ae03754c2d2728bc8f705c55").toPromise().then(profile => {
        //  this.user.name = profile.name;
        this.user.username = profile.username;
        // this.user.avatar_url = profile.avatar_url;
        // this.user.email = profile.email;
        // this.user.location = profile.location;
        // this.user.public_repos = profile.public_repos;
        this.user.html_url = profile.html_url;

        console.log(profile);
         resolve();
    },
    
    );
});
return promise;
}
getRepoInfo(username) {
  interface ApiResponse {
    name: string;
    homepage: string;
    description: string;
    html_url: string;
    clone_url: string;
}
this.http.get<ApiResponse>('https://api.github.com/users/' + username + "?access_token=b9fc7ad7493527d9ae03754c2d2728bc8f705c55").subscribe(response => {
  
    this.items = response;  
  });
}
}
