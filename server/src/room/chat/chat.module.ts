import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ChatGateway } from './gateway/chat.gateway';
import { ChatRoom } from './model/room/room.model';
import { RoomService } from './service/chatRoom-service/chatRoom.service';
import { ConnectedUserService } from './service/connected-player/connected-player.service';
import { ConnectedUser } from './model/connected-player/connected-player.model';
import { Message } from './model/message/message.model';
import { JoinedRoom } from './model/joined-room/joined-room.model';
import { JoinedRoomService } from './service/joined-room/joined-room.service';
import { MessageService } from './service/message/message.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserGroup_ChatRoom } from './model/room/userGroup-chatRoom.model';
import { UsersGroupModule } from 'src/groups/users-group/users-group.module';

@Module({
  imports: [AuthModule, UsersModule, UsersGroupModule, 
    SequelizeModule.forFeature([
      ChatRoom,
      ConnectedUser,
      Message,
      JoinedRoom,
      UserGroup_ChatRoom,
    ])
  ],
  providers: [ChatGateway, RoomService, ConnectedUserService, JoinedRoomService, MessageService]
})
export class ChatModule { }
