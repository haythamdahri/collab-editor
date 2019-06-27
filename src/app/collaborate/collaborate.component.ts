import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Topic} from '../models/topic.model';
import {AngularFirestoreDocument} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../services/topic.service';

@Component({
  selector: 'app-collaborate',
  templateUrl: './collaborate.component.html',
  styleUrls: ['./collaborate.component.css']
})
export class CollaborateComponent implements OnInit {

  topic: Topic;

  constructor(private topicService: TopicService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params.id;
      this.topicService.getTopic(id).subscribe(data => {
        this.topic = {
          id: data.payload.id,
          ...data.payload.data()
        };
      });
    });
  }

  updateContent(id: string, content: string) {
    this.topicService.updateTopic(id, content);
  }
}
