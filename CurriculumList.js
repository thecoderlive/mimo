import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const curriculumListItem = ({ item }) => (
<View style={styles.curriculum_list_item}>
<Image
    style={styles.curriculum_pic}
    source={{uri: item.curriculum_pic}}
    />
<Text style={styles.curriuculum_title}>{item.curriuculum_title}</Text>
<Text style={styles.about_curriculum}>{item.about_curriculum}</Text>
</View>
  );

const CurriculumList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.curriculum_list}
    data={item}
    renderItem={curriculumListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default CurriculumList;

const styles = StyleSheet.create({
curriculum_pic: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
curriuculum_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_curriculum: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});