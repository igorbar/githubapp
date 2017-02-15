import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilesPage } from '../profiles/profiles';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = ProfilesPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
