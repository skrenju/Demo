import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.scss'
})
export class UpcomingEventsComponent {
  events = [
    {
      date: '2024-12-25',
      title: 'Christmas Celebration',
      pastor: 'Pastor John Doe',
      location: 'Main Church Hall',
    },
    {
      date: '2024-12-30',
      title: 'New Year Prayer Service',
      pastor: 'Pastor Jane Smith',
      location: 'Community Center',
    },
    {
      date: '2025-01-05',
      title: 'Baptism Service',
      pastor: 'Pastor Mark Lee',
      location: 'Baptism Pool',
    },
    {
      date: '2025-01-10',
      title: 'Youth Gathering',
      pastor: 'Pastor Emily Clark',
      location: 'Youth Center',
    },
    {
      date: '2025-01-15',
      title: 'Bible Study Group',
      pastor: 'Pastor David Brown',
      location: 'Church Basement',
    },
    {
      date: '2025-01-20',
      title: 'Community Outreach',
      pastor: 'Pastor Linda White',
      location: 'Outreach Center',
    }
  ];
}
