import React from "react";
import { Avatar } from "../Avatar";
import { BulletStatus, Container, Content, NameStatus, Status, Title } from "./styles";

export interface MemberProps{
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface Props {
  data: MemberProps;
}


export function MemberItem({data}: Props) {

  const isOnline = data.status === 'online';

  return(
    <Container>
      <Avatar urlImage={data.avatar_url}/>
      <Content>
        <Title>
          {data.username}
        </Title>
        <Status>
          <BulletStatus IsOnline={isOnline} />
          <NameStatus>
            {
              isOnline ? 'Disponível' : 'Ocupado'
            }
          </NameStatus>
        </Status>
      </Content>
    </Container>
  )
}