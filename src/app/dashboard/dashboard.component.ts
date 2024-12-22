import { Component, AfterViewInit } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { AboutChurchComponent} from '../layouts/full/about-chruch/about-church.component';
import { ChurchServicesComponent} from '../layouts/full/church-services/church-services.component';
import { UpcomingEventsComponent} from '../layouts/full/upcoming-events/upcoming-events.component';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SalesOverviewComponent, OurVisiterComponent,  ContactsComponent, AboutChurchComponent, ChurchServicesComponent, UpcomingEventsComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}
