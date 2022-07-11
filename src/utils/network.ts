import NetInfo from '@react-native-community/netinfo';

const checkConnection = () => {
  return new Promise((resolve, reject) => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        resolve(true);
      } else {
        reject(new Error('network error'));
      }
    });
  });
};

export default checkConnection;
