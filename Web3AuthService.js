import Web3Auth, {LOGIN_PROVIDER} from '@web3auth/react-native-sdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform} from 'react-native';

const clientId =
  'BPuREP1EBH-i6dwt0qZZk1Uur1E90hAzFAEYyTyCFUzcRK9aHE4HLvNLBGNrvxDp8UELoqQS1T6RRRC_z4ejW_Q'; // Replace with your Web3Auth client ID

const web3auth = new Web3Auth({
  clientId,
  network: 'testnet', // or 'mainnet' based on your need
  storage: AsyncStorage,
});

export const loginWithGoogle = async () => {
  try {
    const loginResponse = await web3auth.login({
      loginProvider: LOGIN_PROVIDER.GOOGLE,
    });
    return loginResponse;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
