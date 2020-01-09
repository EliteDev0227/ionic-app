import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular'
import { Network } from '@ionic-native/network'

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export enum ConnectionStatus {
  Online,
  Offline
}


@Injectable()
export class NetworkProvider {

  public status: ConnectionStatus;
  private _status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(null);

  constructor(
    public http: HttpClient,
    public network: Network,
    public events: Events
  ) {
    console.log('Hello NetworkProvider Provider');
    this.status = ConnectionStatus.Online;

  }

  public initializeNetworkEvents(): void {

    /* OFFLINE */
    this.network.onDisconnect().subscribe(() => {
      this.setStatus(ConnectionStatus.Offline)
    })

    /* ONLINE */
    this.network.onConnect().subscribe(() => {
      this.setStatus(ConnectionStatus.Online)
    })
  }

  public getNetworkType(): string {
    return this.network.type
  }

  public getNetworkStatus(): Observable<ConnectionStatus> {
    return this._status.asObservable();
  }

  private setStatus(status: ConnectionStatus) {
    this.status = status;
    this._status.next(this.status);
  }
}
