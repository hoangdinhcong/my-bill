/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Bill } from '../models/bill';
import { ViewModel } from '../models/view-model';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private collection: AngularFirestoreCollection<Bill>;

  constructor(private readonly afs: AngularFirestore) {
    this.collection = afs.collection<Bill>('bills');
  }

  get(id: string): Observable<Bill> {
    return this.collection.doc(id).valueChanges();
  }

  getList(): Observable<ViewModel<Bill>[]> {
    return this.collection.snapshotChanges()
      .pipe(
        map((res) => {
          // console.log(res);
          return res.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data(),
              involvedRoommate: e.payload.doc.get('involvedRoommate')?.map(e => e.id),
            } as ViewModel<Bill>;
          })
        }));
  }

  create(bill: Bill): Observable<unknown> {
    return from(this.collection.doc(this.afs.createId()).set(bill));
    // return from(this.collection.add({ name: Bill.name, isActive: Bill.isActive }));
  }

  delete(id: string): Observable<unknown> {
    return from(this.collection
      .doc(id)
      .delete());
  }

  update(bill: Bill, id: string): Observable<void> {
    return from(this.collection
      .doc(id)
      .update(bill));
  }
}
