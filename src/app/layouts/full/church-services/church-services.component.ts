import { Component } from '@angular/core';

@Component({
  selector: 'app-church-services',
  standalone: true,
  imports: [],
  templateUrl: './church-services.component.html',
  styleUrl: './church-services.component.scss'
})
export class ChurchServicesComponent {
  services = [
    { title: 'Daily Prayers', description: 'Join us for daily prayer and reflection as a community.', icon: 'flaticon-praying' },
    { title: 'Continuous Teaching', description: 'Engage in regular teachings to strengthen your faith.', icon: 'flaticon-bible' },
    { title: 'Sermons', description: 'Listen to inspiring sermons every Sunday to uplift your spirit.', icon: 'flaticon-church' },
    { title: 'Wedding Services', description: 'Celebrate your union with a sacred wedding ceremony.', icon: 'flaticon-rings' },
    { title: 'Community Outreach', description: 'Be part of our efforts to serve the needy and spread love.', icon: 'flaticon-social-care' }
  ];
}
