import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Question from "./Question";
import Starting from "./Starting";

const SettingProfile = () => {
    const [selectQuestion,setSelectQuestion] = useState<number>(0)
    const [isShowStarting, setIsShowStarting] = useState<boolean>(false)
    const listQuestion = [
        {
            title:'What’s on your mind?',
            arrayVariant:['Release Stress','Boost Productivity','Practise Mindfulness']
        },
        {
            title:'How often do you handle your thoughts?',
            arrayVariant:['Not at all, struggling','Occasionally, manageable chaos','Regularly, well-organized']
        },
        {
            title:'What’s your background in?',
            arrayVariant:['Tech Junkiee','Fitness Rat','Teacher','Other']
        },
        {
            title:'What’s your comfort goal?',
            arrayVariant:['Journaling about my day','Sharing gratitude','Well-organized']
        }
    ]
    const handleNextQuestion = ():void => {
        selectQuestion < listQuestion.length - 1 ? setSelectQuestion(selectQuestion + 1) : setIsShowStarting(true)
    }
    return (
        <ImageBackground
            source={isShowStarting ? require('../../../assets/images/starting.jpg') : require('../../../assets/images/settingProfile.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style = {styles.content}>
                {
                isShowStarting ? 
                    <Starting/> 
                    :  
                    <Question 
                        title={listQuestion[selectQuestion].title} 
                        arrayVariant={listQuestion[selectQuestion].arrayVariant} 
                        onPressNext={handleNextQuestion}
                    />
                }
            </View>
            
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:24,
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'#00000',
    borderRadius:3,
  }
});
export default SettingProfile