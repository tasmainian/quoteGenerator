import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [quote, setQuote] = useState("")

  const randomQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setQuote(result.content)
    })
  }

  useEffect(() => {
    randomQuote();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>Quote of the day </Text>
        <Text style={styles.innerText}>{quote}</Text>
        <TouchableOpacity onPress={randomQuote} style={styles.button}>
          <Text style={styles.buttonText}>New Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5372F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20
  },
  quoteText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20
  },
  innerText: {
    color:'#000',
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 1.1,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#5372F0',
    padding: 20,
    borderRadius: 30,
    marginVertical: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
