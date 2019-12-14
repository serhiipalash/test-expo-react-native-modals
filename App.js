import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Modal, { ModalContent, SlideAnimation } from 'react-native-modals'

export default function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={() => setIsModalVisible(true)} />

      <Modal
        visible={isModalVisible}
        onTouchOutside={() => setIsModalVisible(false)}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
      >
        <ModalContent>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Modal</Text>
          </View>
        </ModalContent>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    height: 450,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
  },

  modalText: {
    fontSize: 18,
  },
})
