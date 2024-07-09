// import {Text, View, TextInput, Button} from 'react-native';
// import * as WebBrowser from '@toruslabs/react-native-web-browser';
// import EncryptedStorage from 'react-native-encrypted-storage';
// import {useEffect, useState} from 'react'
// import {Web3Auth} from '@web3auth/modal';
// import {OpenloginAdapter} from '@web3auth/openlogin-adapter';
// import {EthereumPrivateKeyProvider} from '@web3auth/ethereum-provider';
// const clientId =
//   'BPuREP1EBH-i6dwt0qZZk1Uur1E90hAzFAEYyTyCFUzcRK9aHE4HLvNLBGNrvxDp8UELoqQS1T6RRRC_z4ejW_Q';

// const chainConfig = {
//   chainNamespace: 'eip155',
//   chainId: '0x1',
//   rpcTarget: 'https://rpc.ankr.com/eth',
//   displayName: 'Ethereum Mainnet',
//   blockExplorerUrl: 'https://etherscan.io',
//   ticker: 'ETH',
//   tickerName: 'Ethereum',
//   logo: 'https://images.toruswallet.io/ethereum.svg',
// };
// const privateKeyProvider = new EthereumPrivateKeyProvider({
//   config: {chainConfig},
// });

// const web3auth = new Web3Auth({
//   clientId,
//   web3AuthNetwork: 'sapphire_mainnet',
//   privateKeyProvider: privateKeyProvider,
// });
// // const web3auth = new Web3Auth(WebBrowser, EncryptedStorage, {
// //   clientId,
// //   network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET, // SAPPHIRE_MAINNET or SAPPHIRE_DEVNET
// // });
// const openloginAdapter = new OpenloginAdapter({
//   adapterSettings: {
//     loginConfig: {
//       // Google login
//       google: {
//         verifier: 'w3a-google-demo', // Pass the Verifier name here
//         typeOfLogin: 'google', // Pass on the login provider of the verifier you've created
//         clientId:
//           '519228911939-cri01h55lsjbsia1k7ll6qpalrus75ps.apps.googleusercontent.com', // Pass on the Google `Client ID` here
//       },
//     },
//   },
// });
// web3auth.configureAdapter(openloginAdapter);

// // Initialize Modal
// await web3auth.initModal();

// // Login with Google
// await web3auth.connect();
// const App = () => {
//    const [loggedIn, setLoggedIn] = useState(false);
//   const [provider, setProvider] = useState(null);
//   const [console, setConsole] = useState('');
//   const [email, setEmail] = useState('');
//   useEffect(() => {
//     const init = async () => {
//       // IMP START - SDK Initialization
//       await web3auth.init();

//       if (web3auth.privKey) {
//         await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
//         // IMP END - SDK Initialization
//         setProvider(ethereumPrivateKeyProvider);
//         setLoggedIn(true);
//       }
//     };
//     init();
//   }, []);
//    const login = async () => {
//     try {
//       if (!web3auth.ready) {
//         setConsole('Web3auth not initialized');
//         return;
//       }
//       // if (!email) {
//       //   setConsole('Enter email first');
//       //   return;
//       // }

//       setConsole('Logging in');
//       // IMP START - Login
//       await web3auth.login({
//         loginProvider: LOGIN_PROVIDER.GOOGLE,
//         // extraLoginOptions: {
//         //   login_hint: email,
//         // },
//       });

//       if (web3auth.privKey) {
//         await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
//         // IMP END - Login
//         setProvider(ethereumPrivateKeyProvider);
//         uiConsole('Logged In');
//         setLoggedIn(true);
//       }
//     } catch (e) {
//       setConsole(e.message);
//     }
//   };

//   return (
//   <View >
//       <TextInput
       
//         placeholder="Enter email"
//         onChangeText={setEmail}
//       />
//       <Button title="Login with Web3Auth" onPress={login} />
//     </View>
//   );
// };
// export default App;
import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import {loginWithGoogle} from './Web3AuthService';

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await loginWithGoogle();
      setUserInfo(response);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Login with Google" onPress={handleLogin} />
      {userInfo && <Text>{JSON.stringify(userInfo, null, 2)}</Text>}
    </View>
  );
};

export default App;
