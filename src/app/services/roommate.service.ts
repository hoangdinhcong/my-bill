import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Roommate } from '../models/roommate';

@Injectable({
  providedIn: 'root'
})
export class RoommateService {

  private collection: AngularFirestoreCollection<Roommate>;

  constructor(private readonly afs: AngularFirestore) {
    this.collection = afs.collection<Roommate>('roomates');
  }

  get(id: string): Observable<Roommate> {
    return this.collection.doc(id).valueChanges();
  }

  getList(): Observable<Roommate[]> {
    return this.collection.snapshotChanges()
      .pipe(
        map((res: DocumentChangeAction<Roommate>[]) => {
          // console.log(res);
          return res.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Roommate;
          })
        }));
  }

  create(roommate: Roommate): Observable<unknown> {
    roommate.id = this.afs.createId();
    return from(this.collection.doc(roommate.id).set(roommate));
    // return from(this.collection.add({ name: roommate.name, isActive: roommate.isActive }));
  }

  delete(roommate: Roommate): Observable<unknown> {
    return from(this.collection
      .doc(roommate.id)
      .delete());
  }

  update(roommate: Roommate): Observable<void> {
    return from(this.collection
      .doc(roommate.id)
      .update(roommate));
  }
}
