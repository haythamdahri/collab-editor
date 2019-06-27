import {Topic} from './../models/topic.model';
import {Component, ElementRef, Injectable, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {CKEditor4} from 'ckeditor4-angular';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
