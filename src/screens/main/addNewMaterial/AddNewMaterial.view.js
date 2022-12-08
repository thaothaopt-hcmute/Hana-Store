import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AppText from 'components/AppText';
import styles from './AddNewMaterial.styles';
import {CAMERA} from 'assets/path';
import {useFormik} from 'formik';
import EnterInfoBox from 'components/EnterInfoBox';
import AppButton from 'components/AppButton';
import {MATERIAL_ADD_NEW_SCHEME} from './AddNewMaterial.constants';
import {openImagePickerAndResize} from 'helpers/imagePicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {NAMESPACE} from './AddNewMaterial.constants';

function AddNewMaterialView({onPressSubmit}) {
  const {
    handleChange,
    touched,
    values,
    errors,
    handleSubmit,
    setFieldValue,
    resetForm,
    setValues,
  } = useFormik({
    initialValues: {
      count: 0,
      note: '',
      name: '',
      price: '',
      des: '',
      sample_image: '',
    },
    validationSchema: MATERIAL_ADD_NEW_SCHEME,
    validateOnChange: true,
    onSubmit: onPressSubmit,
  });
  const optionsImagePicker = {
    title: 'Open',
    takePhotoButtonTitle: 'Open camera',
    chooseFromLibraryButtonTitle: 'Open Photos',
    quality: 1,
    maxWidth: 1200,
    maxHeight: 1200,
    fixOrientation: true,
    noData: true,
    mediaType: 'photo',
    cameraType: 'back',
    // storageOptions: {
    //   skipBackup: true,
    //   path: 'images',
    // },
  };
  const [imageUri, setImageUri] = React.useState();
  const options = Object.assign(
    {},
    optionsImagePicker,
    // customOptions ? {...customOptions} : {},
  );
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableOpacity
          style={styles.cameraBox}
          onPress={() => {
            launchImageLibrary(options, (res) => {
              console.warn('>>>>openImagePickerAndResize', res.assets[0].uri);
              setFieldValue('sample_image', res.assets[0].uri);
              setImageUri(res.assets[0].uri);
              // if (!err) {
              //   console.warn('mm');
              // }
            });
          }}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.sample_image} />
          ) : (
            <Image source={CAMERA} style={styles.camera} />
          )}
        </TouchableOpacity>
        <View style={styles.infoBlocksInput}>
          <EnterInfoBox
            label={'Name'}
            onChangeText={handleChange('name')}
            error={touched.name && errors.name}
            value={values.name}
            messageError={errors.name}
            placeholder={'...'}
          />
          <EnterInfoBox
            label={'Price'}
            onChangeText={handleChange('price')}
            error={touched.price && errors.price}
            value={values.price}
            messageError={errors.price}
            placeholder={'...'}
          />

          <EnterInfoBox
            label={'Count'}
            onChangeText={handleChange('count')}
            error={touched.count && errors.count}
            value={values.count}
            messageError={errors.note}
            placeholder={'...'}
          />

          <EnterInfoBox
            label={'Description'}
            onChangeText={handleChange('des')}
            error={touched.des && errors.des}
            value={values.des}
            messageError={errors.des}
            placeholder={'...'}
          />
          <AppButton title={'Submit'} onPress={handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default React.memo(AddNewMaterialView);
