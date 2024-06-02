import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


// Custom providers
let newConfig = {...appConfig};
const newProvider = [...newConfig.providers, provideCharts(withDefaultRegisterables())]

bootstrapApplication(AppComponent, {providers: newProvider})
  .catch((err) => console.error(err));
