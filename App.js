import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id:1, 
      nome: 'Rafael Iglesias',
      descricao:'Mais um dia de muitos bugs!',
      imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao:'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada:true,
      likers:1
    },
    {
      id:2, 
      nome: 'Matheus',
      descricao:'Isso sim é ser raiz!',
      imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao:'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada:true,
      likers:1
    },
    {
      id:3, 
      nome: 'José Augusto',
      descricao:'Bora trabalhar!',
      imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao:'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada:true,
      likers:3
    },
    {
      id:4, 
      nome: 'Gustavo Henrique',
      descricao:'Isso sim que é T.I!',
      imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao:'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada:true,
      likers:1
    },
    {
      id:5, 
      nome: 'Guilherme',
      descricao:'Boa noite galera do insta!',
      imgperfil:'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao:'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada:false,
      likers:32
    }
  ])
  return (
    <View style={styles.container}>
      <Header/>

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feed}
      renderItem={ ({item}) => <List data={item}/>  }
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
