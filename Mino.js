import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import CurriculumList from './CurriculumList'

const Mino = () => (
<ScrollView style={styles.mino} showsVerticalScrollIndicator={false}>
<CurriculumList item={item.curriculum_list}/>
<Text style={styles.month}>{item.month}</Text>
<Text style={styles.month_text}>{item.month_text}</Text>
<Text style={styles.price}>{item.price}</Text>
<Text style={styles.year}>{item.year}</Text>
<Text style={styles.year_text}>{item.year_text}</Text>
<Text style={styles.cancelled}>{item.cancelled}</Text>
<Text style={styles.charge}>{item.charge}</Text>
<Text style={styles.price_reduced}>{item.price_reduced}</Text>
<Text style={styles.price_summary}>{item.price_summary}</Text>
</ScrollView>
)

export default Mino;

const styles = StyleSheet.create({
month: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
month_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
price: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
year: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
year_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
cancelled: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
charge: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
price_reduced: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
price_summary: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});