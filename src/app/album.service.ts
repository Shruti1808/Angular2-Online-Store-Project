import { Injectable } from '@angular/core';
import { Album } from './album.model';
// import { ALBUMS } from './mock-albums';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AlbumService {

    albums: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
      this.albums = angularFire.database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

 //Save new album ....
  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string){
      return this.angularFire.database.object('albums/' + albumId);
  //   for (var i = 0; i<= ALBUMS.length-1; i++){
  //     if(ALBUMS[i].id === albumId){
  //       return ALBUMS[i];
  //     }
  //   }
  }

}
