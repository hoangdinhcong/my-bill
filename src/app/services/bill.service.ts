import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Bill } from '../models/bill';

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

  getList(): Observable<Bill[]> {
    return this.collection.snapshotChanges()
      .pipe(
        map((res: DocumentChangeAction<Bill>[]) => {
          // console.log(res);
          return res.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Bill;
          })
        }));
  }

  create(bill: Bill): Observable<unknown> {
    bill.id = this.afs.createId();
    return from(this.collection.doc(bill.id).set(bill));
    // return from(this.collection.add({ name: Bill.name, isActive: Bill.isActive }));
  }

  delete(bill: Bill): Observable<unknown> {
    return from(this.collection
      .doc(bill.id)
      .delete());
  }

  update(bill: Bill): Observable<void> {
    return from(this.collection
      .doc(bill.id)
      .update(bill));
  }
}
