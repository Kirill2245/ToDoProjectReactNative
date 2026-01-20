import StyledButton from "@/components/StyledButton";
import { Dimensions, StyleSheet, View } from "react-native";

const NavMenu = () => {
    return (
        <View style = {styles.menuContain}>
            <View style = {styles.relativeContain}>
                <StyledButton icon="add-outline" variant="circule" style = {styles.addBtn}/>
                <View style = {styles.navMenuBox}></View>
            </View>
        </View>
    );
}
const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    menuContain:{
        width:'100%',
        height:129,
        position:'absolute',
        top:screenHeight - 129,
        paddingBottom:35,
        paddingTop:31,
        zIndex:999
    },
    relativeContain:{
        position:'relative',
        flex:1,
        backgroundColor:'#ffff',
    },
    addBtn:{
        position:'absolute',
        top:-28,
        left:'50%',
        transform: [{ translateX: '-50%' }],
        opacity:1,
        zIndex:1000
    },
    navMenuBox:{
        width:'100%',
        height:62,
        flexDirection:'row',
        borderTopWidth:0.2,
        borderTopColor:'black',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: -4, 
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        }
})
export default NavMenu