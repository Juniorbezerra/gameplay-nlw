import React, { useState } from "react";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../components/Header";
import {CategorySelect} from '../../components/CategorySelect';
import { Container, Form, Label, Select, Image, SelectBody, Field, ContentField, Column, Divider, CaracteresLimit, Footer } from "./styles";
import { Platform, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { GuildIcon } from "../../components/GuildIcon";
import { GuildProps } from "../../components/Guild";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { SmallInput } from "../../components/SmallInput/Index";
import { TextArea } from "../../components/TextArea/Index";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { Background } from "../../components/Background";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import * as yup from 'yup';
import { Alert } from "react-native";


export function AppointmentCreate() {

  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleOpenGuilds(){
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds(){
    setOpenGuildsModal(false);
  }


  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }

  async function handleSave() {
    const AppointmentSchema = yup.object().shape({
      guild: yup.object({
        name: yup.string().required(),
      }),
      category: yup.string().required(),
      date: yup.string().required(),
      description: yup.string().required(),
    });

    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }

    const isValid = await AppointmentSchema.isValid(newAppointment);
    
      if (!isValid){
        Alert.alert('Verifique se todos os campos estão preenchidos')
        return;
    
      }
      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];
    
      await AsyncStorage.setItem(COLLECTION_APPOINTMENTS,JSON.stringify([...appointments,newAppointment]));
    
      navigation.navigate('Home');
  }

  return(
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
    >
      <Background>
        <ScrollView>  
          <Header title="Agendar partida"/>
          <Label style={{ marginLeft: 24, marginTop: 36, marginBottom: 18 }}>Categoria</Label>
          <CategorySelect 
            hasCheckBox
            categorySelected={category} 
            setCategory={handleCategorySelect}
          />

          <Form>
            <RectButton onPress={handleOpenGuilds}>
              <Select>
              {
                  guild.icon 
                  ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> 
                  : <Image/>
                }
                <SelectBody>
                  <Label>
                    { 
                      guild.name 
                      ? guild.name 
                      : 'Selecione um servidor' 
                    }
                  </Label>
                </SelectBody>
                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </Select>
            </RectButton>
            
            <Field>
              <ContentField>
                <Label>Dia e mês</Label>
                <Column>
                  <SmallInput onChangeText={setDay} maxLength={2}/>
                  <Divider>/</Divider>
                  <SmallInput onChangeText={setMonth} maxLength={2}/>
                </Column>
            </ContentField>
            <ContentField>
                <Label>Hora e minuto</Label>
                <Column>
                  <SmallInput onChangeText={setHour} maxLength={2}/>
                  <Divider>/</Divider>
                  <SmallInput onChangeText={setMinute} maxLength={2}/>
                </Column>
            </ContentField>
            </Field>
            <Field style={{marginBottom: 12}}>
              <Label>Descrição</Label>
              <CaracteresLimit>
                Max 100 caracteres
              </CaracteresLimit>
            </Field>
            <TextArea
              onChangeText={setDescription}
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <Footer>
              <Button onPress={handleSave} title="Agendar"/>
            </Footer>
          </Form>
        </ScrollView>
        </Background>
        <ModalView  closeModal={handleCloseGuilds} visible={openGuildsModa}>
          <Guilds handleGuildSelect={handleGuildSelect}/>
        </ModalView>
    </Container>
  )
  
}