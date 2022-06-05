import React, {ElementType} from 'react';
import {Modal} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '@core/types/redux';

import Box from './Box';
import Spinner from './Spinner';

const Loading = (WrappedComponent: ElementType) => {
  const LoadingContainer = (props: any) => {
    const loading = useSelector((state: RootState) => state.ui.loading);
    return (
      <>
        <WrappedComponent {...props} />
        {loading && (
          <Modal visible={loading} transparent>
            <Box
              flex={1}
              justifyContent="center"
              alignItems="center"
              opacity={0.75}
              zIndex={5}
              backgroundColor="text">
              <Spinner />
            </Box>
          </Modal>
        )}
      </>
    );
  };
  return LoadingContainer;
};

export default Loading;
