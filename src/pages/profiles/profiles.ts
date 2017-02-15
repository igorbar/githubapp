import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service';

/*
  Generated class for the Profiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {

  profiles: any;
  repos: any;
  githubuser: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private GithubService: GithubService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    this.getProfile(this.githubuser);
    this.githubuser = '';

  }

  getProfile(username) {
    this.GithubService.getProfile(username).subscribe(res => {
      this.profiles = res;
      console.log(this.profiles);
    })
  }

  reset(){
    this.profiles = '';
    this.githubuser = '';
  }

}
