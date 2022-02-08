import { EventService } from 'src/app/service/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../model/event';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  niceEvent: Event;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventService
        .get(params['id'])
        .subscribe((event) => (this.niceEvent = event));
    });
  }
  onFormSubmit(productFrom: HTMLFormControlsCollection) {
    this.eventService.update(productFrom.form.value).subscribe((data) => data);
  }
}
