import React, { useState,createContext,useContext, useEffect } from 'react'
import * as AuthSession from 'expo-auth-session';
import { api } from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_USER } from '../configs/database';

const {CDN_IMAGE} = process.env
const {CLIENT_ID} = process.env
const {REDIRECT_URI} = process.env
const {RESPONSE_TYPE} = process.env
const {SCOPE} = process.env

interface UserProps {
  id: string
  username: string;
  fistName: string;
  avatar: string;
  email: string;
  token: string;
}

interface AuthContextProps {
  user: UserProps;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params:{
    access_token?: string;
    error?: string;
  }
}

export const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState({} as UserProps);
  const [loading, setLoading] = useState(false);

  async function signIn() {

    try{

    setLoading(true)
    
    const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse

    if(type == 'success' && !params.error){
      api.defaults.headers.authorization = `Bearer ${params.access_token}`
      
      const userInfo = await api.get('/users/@me');

      const fistName = userInfo.data.username.split(' ')[0];
      userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

      const userData = {
        ...userInfo.data,
        fistName,
        token: params.access_token
      }

      await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

      setUser(userData);
    }

    }catch(error){
      throw new Error('Não foi possível autenticar')
    }finally{
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({}as UserProps)
    await AsyncStorage.removeItem(COLLECTION_USER);
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USER);

    if(storage){
      const userLogged = JSON.parse(storage) as UserProps;

      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);

    }

  }

  useEffect(() => {
    loadUserStorageData();
  }, [])

  return (
    <AuthContext.Provider value={{user,signIn,loading,signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}