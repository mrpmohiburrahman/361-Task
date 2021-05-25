import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CBA783',
  },
  skipContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skipTouch: {
    position: 'absolute',
    right: 20
  },
  skipText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "black",
    textAlign: "center",
  },
  carouselContainer: {
    // backgroundColor: 'green'
  },
  heading: {
    width: '60%',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop:20
  },
  description: {
    marginTop: 5,
    fontSize: 20,
    color: 'black',
  },
  listItem: {
    paddingLeft: 20,
    paddingRight: 20,
 
  },
  buttonContainer: {
    paddingStart: 20,
    paddingRight: 20,
    marginTop: 30,
    marginBottom: 50
  },
  listView: {
    width: '100%',
    marginTop: 1,
    paddingLeft:20,
    paddingRight:20,
    marginTop:40
  },
  itemContainer: {
    backgroundColor:'white',
    padding:15,
    marginRight:15,
    borderRadius: 12,
    width:200,
    height:350
  },
  listCarName: {
    color: 'black',
    fontSize: 26,
    fontWeight:'bold'
  },
  imageStyle:{
    width:60,
    height:60,
    marginBottom:20
  }
});

export default styles;
