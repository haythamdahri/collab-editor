import {Injectable} from '@angular/core';
import {Topic} from '../models/topic.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private angularFirestore: AngularFirestore, private route: ActivatedRoute) {
  }

  getTopics() {
    return this.angularFirestore.collection<Topic>('topics').snapshotChanges();
  }

  getTopicsByQuery(query: string) {
    return this.angularFirestore.collection<Topic>('topics', ref => {
      // Compose a query using multiple .where() methods
      return ref.where('title', '==', query);
    }).snapshotChanges();
  }

  getTopic(id: string) {
    return this.angularFirestore.doc<Topic>('topics/' + id).snapshotChanges();
  }

  updateTopic(id: string, content: string) {
    this.angularFirestore.doc<Topic>('topics/' + id).update({'id': id, 'content': content});
  }
}
