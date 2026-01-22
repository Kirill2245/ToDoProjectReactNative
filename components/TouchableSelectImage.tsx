import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";

const TouchableSelectImage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== 'granted') {
            Alert.alert('Нужно разрешение', 'Разрешите доступ к галерее');
            return;
        }
        
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log('Image picker result:', result); // Для отладки

        if (!result.canceled && result.assets && result.assets.length > 0) {
            console.log('Selected image URI:', result.assets[0].uri);
            setSelectedImage(result.assets[0].uri);
        } else {
            console.log('Image selection was canceled');
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        
        if (status !== 'granted') {
            Alert.alert('Нужно разрешение', 'Разрешите доступ к камере');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const showImagePickerOptions = () => {
        Alert.alert(
            "Выберите фото",
            "Откуда хотите загрузить фото?",
            [
                {
                    text: "Галерея",
                    onPress: pickImage,
                },
                {
                    text: "Камера",
                    onPress: takePhoto,
                },
                {
                    text: "Отмена",
                    style: "cancel",
                }
            ]
        );
    };

    return (

        <TouchableOpacity onPress={showImagePickerOptions}>
            <Image 
                source={selectedImage ? 
                    { uri: selectedImage } : 
                    require('../assets/images/def.png')
                }
                style={styles.image}
                resizeMode="contain"
            />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    image: {
        width: 64, 
        height: 83, 
        resizeMode: 'contain', 
    }
});

export default TouchableSelectImage;