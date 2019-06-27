import {Component, OnInit} from '@angular/core';
import {Topic} from '../models/topic.model';
import {TopicService} from '../services/topic.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-collaborate-list',
  templateUrl: './collaborate-list.component.html',
  styleUrls: ['./collaborate-list.component.css']
})
export class CollaborateListComponent implements OnInit {

  topics: Topic[];
  noTopics: boolean;

  constructor(private topicService: TopicService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.noTopics = false;
      this.topics = new Array();
      if (queryParams.query == null) {
        this.topicService.getTopics().subscribe(data => {
          this.topics = data.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Topic;
          });
        });
      } else {
        const query = queryParams.query;
        this.topicService.getTopicsByQuery(query).subscribe(data => {
          if (data == null || data.length == 0) {
            this.topics = null;
          } else {
            this.topics = data.map(e => {
              return {
                id: e.payload.doc.id,
                ...e.payload.doc.data()
              } as Topic;
            });
          }
        });
      }
    });
  }

}
