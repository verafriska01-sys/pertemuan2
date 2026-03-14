import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* SECTION FOTO */}
      <Image 
        source={{ uri: "https://raw.githubusercontent.com/verafriska01-sys/veragithub/main/images/mypicture.jpeg"}}
        
        // jika pakai gambar lokal
        // source={require('../assets/images/mypicture.jpeg')}
        
        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>VERA FRISKA TELAUMBANUA</Text>
      <Text style={styles.nim}>243303261211</Text>
      <Text style={styles.jurusan}>SISTEM INFORMASI</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.quote}>
          &quot;Orang hebat bukan yang tak pernah jatuh, tapi yang selalu bangkit lagi&quot;
        </Text>

        <Text style={styles.bioText}>
          🚀 Currently mastering React Native SDK 50.
        </Text>

        <Text style={styles.bioText}>
          Goal: Build goated apps!
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#ffff99',
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },

  nim: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 5,
    letterSpacing: 2,
  },

  jurusan: {
    fontSize: 14,
    color: '#ffff99',
    marginBottom: 20,
    letterSpacing: 2,
  },

  bioCard: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },

  quote: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '600',
    fontStyle: 'italic',
  },

  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});