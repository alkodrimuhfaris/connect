import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CheckBox} from 'native-base';
import ModalCenter from '../modals/ModalCenter';
import SafeAreaView from 'react-native-safe-area-view';
import ContentAlert from '../components/ContentAlert';
import Selector from '../components/ContentSelector';

export default function Chats() {
  // state for sort
  const [openSort, setOpenSort] = React.useState(false);
  const [sort, setSort] = React.useState(0);
  const sortValue = ['Time recieved', 'Unread messages'];

  const setOptionSort = (index) => {
    setSort(index);
    setOpenSort(false);
  };

  // state for photo quality
  const [openPhoto, setOpenPhoto] = React.useState(false);
  const [photoQuality, setPhotoQuality] = React.useState(0);
  const photoQualityArr = ['Low', 'High'];

  const setOptionQuality = (index) => {
    setPhotoQuality(index);
    setOpenPhoto(false);
  };

  // state for delete history
  const [modalDeleteHistory, setModalDeleteHistory] = React.useState(false);
  const cancelDelete = () => {
    console.log('cancel');
  };
  const proceedDelete = () => {
    console.log('proceed');
  };

  // state for sticker preview
  const [stickerPreview, setStickerPreview] = React.useState(false);
  React.useEffect(() => {
    console.log(stickerPreview);
  }, [stickerPreview]);

  return (
    <SafeAreaView style={styles.parent}>
      {/* modal for sort Chats */}
      <ModalCenter
        modalOpen={openSort}
        setModalOpen={setOpenSort}
        modalContent={
          <Selector sortOption={sortValue} setOption={setOptionSort} />
        }
      />
      {/* modal for sort Chats */}
      <ModalCenter
        modalOpen={openPhoto}
        setModalOpen={setOpenPhoto}
        modalContent={
          <Selector sortOption={photoQualityArr} setOption={setOptionQuality} />
        }
      />
      {/* modal for delete history */}
      <ModalCenter
        modalOpen={modalDeleteHistory}
        setModalOpen={setModalDeleteHistory}
        modalContent={
          <ContentAlert
            setModalOpen={setModalDeleteHistory}
            setOk={proceedDelete}
            setCancel={cancelDelete}
            contentUpper={
              "Once you clear your chat history you won't be able to get it back."
            }
            contentLower="Delete"
          />
        }
      />

      <View style={styles.header}>
        <Text style={styles.headerTxt}>Chats</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => setOpenSort(!openSort)}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Sorts chats</Text>
          <Text style={styles.subTitle}>{sortValue[sort]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setOpenPhoto(!openPhoto)}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Photo Quality (sent)</Text>
          <Text style={styles.subTitle}>{photoQualityArr[photoQuality]}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setModalDeleteHistory(!openPhoto)}
          style={styles.buttonWrapper}>
          <Text style={styles.title}>Delete Chat History</Text>
        </TouchableOpacity>

        <View style={styles.buttonCheckbox}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Sticker Previews</Text>
            <Text style={styles.subTitleCheckbox}>
              View an enlarged preview of selected stucjers befire sending them.
            </Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              color="#56CF75"
              checked={stickerPreview}
              onPress={() => setStickerPreview(!stickerPreview)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  header: {
    height: '10%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerTxt: {
    fontSize: 18,
    color: '#222',
  },
  buttonsContainer: {
    height: 'auto',
    width: '100%',
    paddingLeft: '5%',
  },
  buttonWrapper: {
    width: '100%',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    paddingVertical: '5%',
  },
  buttonCheckbox: {
    width: '100%',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '5%',
  },
  title: {
    fontSize: 14,
    color: '#222',
  },
  subTitle: {
    fontSize: 12,
    color: '#0066CC',
  },
  subTitleCheckbox: {
    fontSize: 12,
    color: '#999',
  },
  checkbox: {
    marginRight: '10%',
  },
  textWrapper: {
    width: '80%',
  },
});
