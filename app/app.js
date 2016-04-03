import {App, IonicApp } from 'ionic-angular';
import {LocalData} from './providers/local-data';
import {StockService} from './providers/stock';
import {MenuService} from './providers/menu';
import {Home} from './pages/home/home';
//import {About} from './pages/about/about';

@App({
  templateUrl: 'build/app.html',
	providers: [LocalData,StockService,MenuService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class Yunguba {
  static get parameters() {
    return [[IonicApp],[LocalData],[MenuService]];
  }
  constructor(app,localData,menu) {
		this.app = app;
    this.localData = localData;
    //this.stockService = stockService;
    
		this.localData.load();
		this.root = Home;
		menu.buildMenu('home');
		this.pages = menu.getMenu();
    //platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    //});
  }
	gotoPage(page){
		let nav = this.app.getComponent('nav');
		if(page.name==='detail'){
			return nav.push(page.component,{code:page.code});
		}
		//if (page.index) {
      nav.setRoot(page.component, {tabIndex: page.index,type:page.type});
    //} else {
      //nav.setRoot(page.component);
    //}
	}
}
