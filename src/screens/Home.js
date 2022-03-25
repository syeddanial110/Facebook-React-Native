import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Form, Image} from 'react-bootstrap';
import fbImage from '../assets/images/facebook-logo.png';
// import {Button} from 'bootstrap';

const Home = () => {
  return (
    <>
      <View style={{backgroundColor: '#3157D7', height: 1000}}>
        {/* <img src={fbImage} width="200px" /> */}
        {/* <Image
          source={{
            uri: 'https://about.fb.com/wp-content/uploads/2018/11/fb-hero-image-001.jpeg?w=1200',
          }}
          style={{width: 40, height: 40}}
        /> */}
        {/* <Text>Hello World</Text> */}
        <View
          style={{
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 2,
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 50, color: 'white'}}>FaceBook</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              padding: 10,
              fontSize: 20,
              textAlign: 'center',
            }}>
            User name
          </Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 35,
              borderRadius: 5,
              textAlign: 'center',
            }}
            defaultValue=" enter username"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              padding: 10,
              fontSize: 20,
              textAlign: 'center',
            }}>
            Password
          </Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 35,
              borderRadius: 5,
              textAlign: 'center',
            }}
            defaultValue=""
            secureTextEntry={true}
          />
        </View>
        <View style={{marginTop:25, alignItems:"center"}}>
          <Button title='Login'  />
        </View>
      </View>
    </>
  );
};

export default Home;
