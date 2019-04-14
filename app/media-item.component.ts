import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  //'mediaItemToWatch is an alias for mediaItem, mostly don't want to use it
  @Input('mediaItem') mediaItem;
  //exposing an event that can be subscribed to like a native dom emit
  @Output() delete = new EventEmitter();

  onDelete() {
    alert('deleting');
    
    //passes the media item to the emit
    this.delete.emit(this.mediaItem);
  }

 }
