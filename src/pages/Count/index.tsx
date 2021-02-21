import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import data from './data';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03191e',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  internal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#fff',
  },
});

const filter = (users, query) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );
};

const UserList = ({ users, query }) => {
  const filtered = filter(users, query);
  return filtered.map(user => (
    <Text style={styles.text} key={user.name}>
      {user.name}
    </Text>
  ));
};

const Count: React.FC = () => {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState(data);

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.internal}>
            <Text style={styles.text}>
              Count:
              {count}
            </Text>

            <TouchableOpacity onPress={() => setCount(prev => prev + 1)}>
              <Icon name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <TextInput
            onChangeText={text => setQuery(text)}
            style={styles.textInput}
          />
        </View>

        <UserList users={users} query={query} />
      </SafeAreaView>
    </>
  );
};

export default Count;
