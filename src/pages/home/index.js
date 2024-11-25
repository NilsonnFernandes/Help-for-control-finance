import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Nilson Fernandes"/>

      <Balance saldo="9.820,50" gastos="-585"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={ item }/>}
      />
      
    </View>
  );
}

const list = [
    {
        id: 1,
        label: 'Boleto conta de internet',
        value: '330,00',
        data: '21/11/2024',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente Fernando Jau',
        value: '2.500,00',
        data: '10/11/2024',
        type: 1 // receita / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '8.700,00',
        data: '19/11/2024',
        type: 1 // receita / entradas
    },    
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
