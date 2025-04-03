import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#108103', dark: '#252543' }}
      headerImage={
              <Image
                source={require('@/assets/images/freccie-removebg-preview.png')}
              />
            }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" >Informazioni troppo utili</ThemedText>
      </ThemedView>
      <ThemedText>In questa pagina ci dovrebbero essere delle info che non so</ThemedText>
      
      <Collapsible title="Qualche tipo di informazione parte-1">
        <ThemedText>
        <Image
                source={require('@/assets/images/brooooo.png')}
              />
        </ThemedText>
      </Collapsible>
      <Collapsible title="Sopportare delle persone">
        <ThemedText>{
              <Image
                source={require('@/assets/images/gg.png')}
              />
            }
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
