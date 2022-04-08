import React, {FC} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import {Box, Button, Text} from '@components';
import {makeStyle, Theme, useTheme} from '@config/theme';
import {useModal} from '@utils/modal';

const ModalWrapper: FC = () => {
  const style = useStyles();
  const theme = useTheme();
  const {modal, closeModal} = useModal();
  const {title, description, action} = modal;
  return (
    <Modal visible={modal.show} transparent animationType="fade">
      <Box
        flex={1}
        justifyContent="center"
        alignContent="center"
        position="relative"
        opacity={1}>
        <TouchableOpacity style={style.overlay} onPress={() => closeModal()} />
        <Box
          marginHorizontal="m"
          backgroundColor="white"
          opacity={1}
          padding="m"
          borderRadius="m"
          zIndex={3}>
          <Text variant="h3" marginBottom="m">
            {title}
          </Text>
          <Text marginBottom="m" color="darkGrey">
            {description}
          </Text>
          {action !== undefined ? (
            <Box flexDirection="row">
              <Button
                variant="outline"
                size="medium"
                onPress={() => closeModal()}
                label="Cancel"
              />
              <Box width={theme.spacing.s} />
              <Button
                variant="primary"
                size="medium"
                onPress={action}
                label="Accept"
              />
            </Box>
          ) : (
            <Button
              variant="primary"
              size="medium"
              onPress={() => closeModal()}
              label="Accept"
            />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

const useStyles = makeStyle((theme: Theme) => ({
  overlay: {
    backgroundColor: theme.colors.text,
    bottom: 0,
    flex: 1,
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
}));

export default ModalWrapper;
