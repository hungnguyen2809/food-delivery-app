import AsyncStorage from '@react-native-async-storage/async-storage';
import {logger} from './commom';

export enum STORAGE_KEY {
  FIRST_TIME = 'FIRST_TIME',
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  USER_INFO = 'USER_INFO',
}

export const setDataStorage = async (key: string, data: any) => {
  try {
    const value = JSON.stringify(data);
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    logger.log('setDataStorage_E:', error);
    return null;
  }
};

export const getDataStorage = async <T = any>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    logger.log('getDataStorage_E:', error);
    return null;
  }
};

export const removeDataStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return null;
  }
};

export const getAllKeyStorage = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    return null;
  }
};

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return null;
  }
};
