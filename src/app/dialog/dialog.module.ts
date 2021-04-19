import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageComponent} from './shared/component/message/message.component';
import {SocketService} from './shared/services/message.service';
import {DialogRoutingModule} from './dialog-routing.modules';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    FormsModule
  ],
  providers: [SocketService]
})
export class DialogModule {}
