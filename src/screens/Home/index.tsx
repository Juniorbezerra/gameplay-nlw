import React, { useCallback } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";
import { AppointmentItem, AppointmentProps } from "../../components/AppointmentItem";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Background } from '../../components/Background';
import { Header } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";

export function Home(){
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails',{guildSelected});
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];
    
    if(category){
      setAppointments(storage.filter(item => item.category === category));
    }else{
      setAppointments(storage);
    }

    setLoading(false);
  
  }

  useFocusEffect(useCallback(()=>{
    loadAppointments();
  },[category]))

  return(
    <Background>
        <Header>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </Header>

        <CategorySelect 
          categorySelected={category} 
          setCategory={handleCategorySelect}
        />

          {
            loading ? <Load/> :
            <>
              <ListHeader
                title="Partidas agendadas" 
                subtitle={`Total ${appointments.length}`}/>

                <FlatList
                  style={{
                    marginTop: 24,
                    marginLeft: 24
                  }}
                  data={appointments}
                  keyExtractor={item => item.id}
                  contentContainerStyle={{paddingBottom:69}}
                  ItemSeparatorComponent={() => <ListDivider />}
                  renderItem={({item}) => (
                    <AppointmentItem 
                      data={item}
                      onPress={()=>{handleAppointmentDetails(item)}}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                />
            </>
          }
    </Background>
  )
}